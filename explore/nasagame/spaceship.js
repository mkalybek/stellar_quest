export class Spaceship {
    constructor(canvas) {
        this.canvas = canvas;
        this.size = 20;
        this.maxSpeed = 25; // Maximum speed of the spaceship
        this.acceleration = 0.001; // Acceleration value
        this.friction = 0.99; // Friction value to gradually slow down
        this.angle = 0; // Current angle of the spaceship (for rotation)
        this.rotationSpeed = 1; // How fast the spaceship can rotate
        this.velocity = { x: 0, y: 0 }; // Speed and direction of the spaceship
        this.posX = this.canvas.width / 2; // Virtual position in space
        this.posY = this.canvas.height / 2; // Virtual position in space
        this.mouseDown = false; // Track mouse button state
        this.circleRadius = 50; // Radius of the circle around the cursor
    }

    // Update the spaceship's position, velocity, and rotation
    update(mouse) {
        if (this.mouseDown) {
            // Get the distance from the spaceship to the mouse cursor
            const dx = mouse.x - this.canvas.width / 2;
            const dy = mouse.y - this.canvas.height / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angleToMouse = Math.atan2(dy, dx);
            
            // Only apply acceleration if the spaceship is not at max speed
            const speedFactor = Math.min(distance / this.circleRadius, 1);
            const desiredSpeedX = Math.cos(angleToMouse) * this.maxSpeed * speedFactor;
            const desiredSpeedY = Math.sin(angleToMouse) * this.maxSpeed * speedFactor;

            // Accelerate towards the desired speed
            this.velocity.x += (desiredSpeedX - this.velocity.x) * this.acceleration;
            this.velocity.y += (desiredSpeedY - this.velocity.y) * this.acceleration;

            // Clamp the velocity to ensure it doesn't exceed max speed
            const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
            if (speed > this.maxSpeed) {
                this.velocity.x = (this.velocity.x / speed) * this.maxSpeed;
                this.velocity.y = (this.velocity.y / speed) * this.maxSpeed;
            }

            // Update position based on velocity (keeping momentum from previous movement)
            this.posX += this.velocity.x;
            this.posY += this.velocity.y;

            // Update the angle based on velocity for rotation
            this.angle = Math.atan2(this.velocity.y, this.velocity.x);
            
        } else {
            // Apply friction when not moving
            this.velocity.x *= this.friction;
            this.velocity.y *= this.friction;

            // Update position based on velocity
            this.posX += this.velocity.x;
            this.posY += this.velocity.y;

            // Update the angle based on velocity
            this.angle = Math.atan2(this.velocity.y, this.velocity.x);
        }
    }

    // Draw the spaceship on the canvas
    draw(ctx) {
        ctx.save();
        ctx.translate(this.canvas.width / 2, this.canvas.height / 2); // Move origin to center of the screen
        ctx.rotate(this.angle); // Rotate spaceship according to its angle
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(-this.size/2, -this.size / 5); 
        ctx.lineTo(this.size/2, -this.size / 20);
        ctx.lineTo(-this.size/2, this.size / 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // Draw the circle around the mouse
    drawCircle(ctx, mouse) {
        if (this.mouseDown) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, this.circleRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
        }
    }

    // Draw the space coordinates on the canvas
    drawCoordinates(ctx) {
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.fillText(`X: ${this.posX.toFixed(2)}`, 10, 20); // X coordinate
        ctx.fillText(`Y: ${this.posY.toFixed(2)}`, 10, 40); // Y coordinate
        
        let texture = './nasagame/textures/uranusliketexture.png';
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(texture, 100 , 100 , 500, 500);
        };
        ctx.restore();
    }
}
