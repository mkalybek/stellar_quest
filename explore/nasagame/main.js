import { Spaceship } from './spaceship.js';
import { Background } from './background.js';

function closePlanet(spaceship, background){
    
    //check if planet is close to ship
    background.planets.forEach(planet => {
        // Calculate the distance between spaceship and planet using adjusted positions
        const dx = (spaceship.posX + canvas.width / 2) - planet.x;
        const dy = (spaceship.posY + canvas.height / 2) - planet.y;
        const distance = Math.sqrt(dx * dx + dy * dy); // Euclidean distance formula
        
        
            if (distance < planet.size + 200) {
                if (distance < planet.size+10){
                    // spaceship.posX += dx/40;
                    // spaceship.posY += dy/40; 
                    spaceship.velocity.x += dx/1000;
                    spaceship.velocity.y += dy/1000;
                }
                const infoDisplay = document.getElementById('infoDisplay');
                infoDisplay.textContent = `You are close to the planet: ${planet.name}`;
                planet.color = 'red';
                console.log('Planet name:', planet.name);
            } else {
                const infoDisplay = document.getElementById('infoDisplay');
                infoDisplay.textContent = ''; // Clear display if no planet is nearby
                planet.color = 'blue';
            }
        
    });
}


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize the spaceship and background
const spaceship = new Spaceship(canvas);
const background = new Background(canvas);

// Mouse position
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// Event listener to update mouse position
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Event listeners for mouse down and up
canvas.addEventListener('mousedown', (event) => {
    if (event.button === 0) { // Left mouse button
        spaceship.mouseDown = true; // Set mouseDown to true
    }
});

canvas.addEventListener('mouseup', (event) => {
    if (event.button === 0) { // Left mouse button
        spaceship.mouseDown = false; // Set mouseDown to false
    }
});

// Function to fetch planet data from the server
async function fetchPlanets() {
    try {
        const response = await fetch('http://localhost:3000/api/planets');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const planets = await response.json();
        return planets;
    } catch (error) {
        console.error('Error fetching planets:', error);
        return [];
    }
}

// Game loop
async function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fetch planet data once on the first frame
    if (!background.planets || background.planets.length === 0) {
        const planetsData = await fetchPlanets();
        background.planetsdata = planetsData;
        background.loadPlanets(planetsData); // Load planets into the background
    }
    // Update background based on spaceship's position and speed
    const speed = spaceship.update(mouse); // Get the speed from spaceship's update method
    background.draw(ctx, spaceship.posX, spaceship.posY);
    
    
    // Update spaceship and draw it
    spaceship.draw(ctx);
    spaceship.drawCircle(ctx, mouse); // Draw the circle around the mouse
    spaceship.drawCoordinates(ctx); // Draw the coordinates
    closePlanet(spaceship, background);
    
    
    requestAnimationFrame(gameLoop);
    }

// Start the game loop
gameLoop();

// Adjust canvas size when the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    spaceship.drawCoordinates(canvas);
});
