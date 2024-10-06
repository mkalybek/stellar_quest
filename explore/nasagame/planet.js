export class Planet {
    constructor(x, y, size, name = "unnamed", texture) {
        this.x = x; // X coordinate in space
        this.y = y; // Y coordinate in space
        this.size = size; // Size of the planet
        this.color = 'blue';
        this.name = name;
        this.texture = texture;
        this.adjustedX;
        this.adjustedY;
        this.image = new Image();
        this.image.src = this.texture;

        // Load the image and set a flag to indicate when it's ready
        this.imageLoaded = false;
        this.image.onload = () => {
            this.imageLoaded = true; // Set the loaded flag to true when the image is loaded
        };
        this.image.onerror = () => {
            console.error('Failed to load image. Check the file path and ensure the image exists.');
        }
    }
    
    draw(ctx, adjustedX, adjustedY) {
        // Check if the image is loaded before drawing
        if (this.imageLoaded) {
            ctx.drawImage(this.image, adjustedX - this.size, adjustedY - this.size, this.size * 2, this.size * 2);
        } else {
            console.warn('Image not loaded yet.'); // Optional: Add a warning if the image is not loaded
        }
    


        // } else {
        //     // Optional: Draw a placeholder while the texture is loading
        //     ctx.fillStyle = this.color; // Placeholder color
        //     ctx.beginPath(); 
        //     ctx.arc(adjustedX, adjustedY, this.size, 0, Math.PI * 2);
        //     ctx.fill();
        // }

        // Optionally, draw the planet name if needed
        // ctx.fillStyle = 'white';
        // ctx.font = '14px Arial';
        // ctx.fillText(this.name, adjustedX, adjustedY - this.size / 2 - 5); // Draw name above the planet
    }
}
