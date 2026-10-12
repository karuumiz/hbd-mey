// --- Logika Tombol Mulai & Play Musik ---
document.getElementById('startButton').addEventListener('click', function() {
    // Sembunyikan layar awal
    document.getElementById('startScreen').style.display = 'none';
    
    // Tampilkan konten dan canvas
    document.getElementById('content').style.display = 'block';
    document.getElementById('fireworksCanvas').style.display = 'block';
    
    // Play musik MP3-nya
    let audio = document.getElementById("myAudio");
    audio.play();
});


// --- Animasi Confetti (Sisanya tetep sama) ---
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];
const colors = ["#ff5252", "#ffda79", "#34ace0", "#706fd3", "#33d9b2"];

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 10 + 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 3 + 2;
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 0.2 - 0.1;
    }
    
    update() {
        this.y += this.speed;
        this.angle += this.spin;
        
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function initConfetti() {
    for (let i = 0; i < 150; i++) {
        confettiParticles.push(new Confetti());
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateConfetti);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initConfetti();
animateConfetti();