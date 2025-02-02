// Space Theme with Interactive Cursor
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');
const particles = [];
let width, height;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function createParticle(x, y) {
    const particle = {
        x: x,
        y: y,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: 'rgba(250, 247, 45, 0.8)',
    };
    particles.push(particle);
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size *= 0.95;

        if (particle.size <= 0.5) {
            particles.splice(i, 1);
            i--;
        } else {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        }
    }
    requestAnimationFrame(animateParticles);
}

function moveCursor(event) {
    createParticle(event.x, event.y);
}

// Initialize
resizeCanvas();
animateParticles();

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);

// Create particles on mouse movement
window.addEventListener('mousemove', moveCursor);

// Add spatial background effect
function drawStars() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
    }
}

drawStars();
