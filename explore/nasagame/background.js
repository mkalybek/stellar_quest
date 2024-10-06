import { Planet } from './planet.js';


// Helper function to convert glon and glat to x, y coordinates
function toCartesian(glon, glat) {
    const R = 30000; // A scaling factor to map coordinates nicely on canvas
    const x = R * Math.cos(glat * Math.PI / 180) * Math.cos(glon * Math.PI / 180);
    const y = R * Math.cos(glat * Math.PI / 180) * Math.sin(glon * Math.PI / 180);

    return { x, y };
}
// Function to check if two planets overlap based on their size (radius)
function planetsOverlap(planet1, planet2) {
    const dx = planet1.x - planet2.x;
    const dy = planet1.y - planet2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (planet1.size + planet2.size);
}

// Function to adjust the position of the smaller planet if it overlaps with another planet
// function adjustPosition(planet1, planet2) {
//     // Keep the larger planet in place, move the smaller one
//     if (planet1.size < planet2.size) {
//         let newPosition = toCartesian(planet1.glon + 1, planet1.glat + 1); // Slightly change position
//         planet1.x = newPosition.x;
//         planet1.y = newPosition.y;
//     } else {
//         let newPosition = toCartesian(planet2.glon + 1, planet2.glat + 1); // Slightly change position
//         planet2.x = newPosition.x;
//         planet2.y = newPosition.y;
//     }
// }
// Function to load the stars and convert them to [x, y] array format
function loadStars() {
    return fetch('../nasagame/data/stars_data.json')    // Ensure the correct path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(stars => {
            // Map the stars data to an array of [x, y] arrays
            const starArray = stars.map(star => [star.x, star.y]);
            return starArray;
        })
        .catch(error => console.error('Error loading star data:', error));
}

export class Background {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.planets = []; // Initialize an empty array for planets
        this.planetsdata = null;
        this.stars = []; // Initialize stars as empty array

        // Load stars asynchronously
        this.loadAndGenerateStars();
    }

    // Asynchronously load and generate stars
    async loadAndGenerateStars() {
        try {
            const starArray = await loadStars(); // Wait for stars to load
            this.stars = this.generateStars(starArray); // Generate stars once loaded
        } catch (error) {
            console.error('Error generating stars:', error);
        }
    }

    // Generate stars from array of [x, y] coordinates
    generateStars(starArray) {
        const stars = [];
        for (let i = 0; i < starArray.length; i++) {
            const x = starArray[i][0]-10000; // X position
            const y = starArray[i][1]-10000; // Y position
            stars.push({ x, y }); // Store the star position
        }
        return stars;
    }

    // Load planets from the fetched data
    loadPlanets(planetsData) {
        let prevplanet = planetsData[0];
        this.planets = planetsData.map(planet => {
            
            const latRad = planet.glat;
            const lonRad = planet.glon;
            const latRad1 = prevplanet.glat;
            const lonRad1 = prevplanet.glon;

            const {x, y} = toCartesian(lonRad, latRad);
            const {x1, y1} = toCartesian(lonRad1, latRad1);
            const size = planet.pl_rade * 10; // Set size based on planet radius
            var texture = '../nasagame/textures/plutoliketexture.png';
            if (size > 30 && size <= 60) {
                texture = '../nasagame/textures/marsliketexture.png';
            } else if (size > 60 && size <= 90){
                texture = '../nasagame/textures/uranusliketexture.png';
            } else if (size > 90 && size <= 100){
                texture = '../nasagame/textures/jupiterlikeplanet.png';
            } else if (size > 100 && size <= 120){
                texture = '../nasagame/textures/veneraliketexture.png';
            } else if (size > 120){
                texture = '../nasagame/textures/frozenliketexture.png';
            }
            const newPlanet = new Planet(x, y, size, planet.name, texture);
            const oldPlanet = new Planet(x1, y1, size, prevplanet.name, texture);
            if (planetsOverlap(oldPlanet, newPlanet)){
                    if (oldPlanet.size < newPlanet.size) {
                    let newPosition = toCartesian(oldPlanet.glon + 1, oldPlanet.glat + 1); // Slightly change position
                    oldPlanet.x = newPosition.x;
                    oldPlanet.y = newPosition.y;
                } else {
                    let newPosition = toCartesian(newPlanet.glon + 1, newPlanet.glat + 1); // Slightly change position
                    newPlanet.x = newPosition.x;
                    newPlanet.y = newPosition.y;
                }   
            }
            prevplanet = planet;
            return newPlanet; // Create a new planet instance
        });
    }

    // Draw the background, stars, and planets
    draw(ctx, spaceshipX, spaceshipY) {
        // Background
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Get canvas bounds (width and height)
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        // Define the visible area for stars relative to the spaceship
        const visibleAreaXStart = spaceshipX*0.01 - canvasWidth*7;
        const visibleAreaXEnd = spaceshipX*0.01 + canvasWidth*7;
        const visibleAreaYStart = spaceshipY*0.01 - canvasHeight*7;
        const visibleAreaYEnd = spaceshipY*0.01 + canvasHeight*7;

        // Draw stars that are only within the current visible area
        ctx.fillStyle = 'white';
        this.stars.forEach(star => {
            const starX = (star.x - spaceshipX);
            const starY = (star.y - spaceshipY);

            // Check if the star is within the visible area
            if (starX >= visibleAreaXStart && starX <= visibleAreaXEnd &&
                starY >= visibleAreaYStart && starY <= visibleAreaYEnd) {
                ctx.fillRect(starX, starY, 1, 1); // Draw the star
            }
        });

        // Draw planets, moving with the background, but faster
        
        for (let i = 0; i < this.planets.length; i++){
            const adjustedX = this.planets[i].x - spaceshipX; // Adjust X based on spaceship
            const adjustedY = this.planets[i].y - spaceshipY; // Adjust Y based on spaceship
            this.planets[i].adjustedX = adjustedX;
            this.planets[i].adjustedY = adjustedY;
            if (adjustedX >= visibleAreaXStart && adjustedX <= visibleAreaXEnd &&
                adjustedX >= visibleAreaYStart && adjustedX <= visibleAreaYEnd) {
             
                this.planets[i].draw(ctx, adjustedX, adjustedY); // Draw the planet at its adjusted position
            }
        }
    }
}
