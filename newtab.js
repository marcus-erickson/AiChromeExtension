document.addEventListener("DOMContentLoaded", () => {
  // Clock
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);

  // More tools toggle
  const moreBtn = document.getElementById("more-tools-btn");
  const extraTools = document.getElementById("extra-tools");

  moreBtn.addEventListener("click", () => {
    extraTools.classList.toggle("hidden");
    moreBtn.classList.toggle("active");
  });

  // Particle system
  initParticles();
});

function updateTimeAndDate() {
  const now = new Date();

  const timeElement = document.getElementById("current-time");
  timeElement.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dateElement = document.getElementById("current-date");
  const options = { weekday: "long", month: "long", day: "numeric" };
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  const neonColors = [
    "rgba(0, 255, 65, ",    // green
    "rgba(0, 240, 255, ",   // cyan
    "rgba(255, 0, 229, ",   // magenta
    "rgba(176, 38, 255, ",  // purple
    "rgba(255, 32, 64, ",   // red
  ];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function spawnParticle() {
    const color = neonColors[Math.floor(Math.random() * neonColors.length)];
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      color: color,
      alpha: Math.random() * 0.3 + 0.05,
      life: 0,
      maxLife: 300 + Math.random() * 400,
    });
  }

  function update() {
    ctx.clearRect(0, 0, w, h);

    // Spawn new particles occasionally
    if (particles.length < 40 && Math.random() < 0.08) {
      spawnParticle();
    }

    particles = particles.filter((p) => p.life < p.maxLife);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.life++;

      // Fade in/out
      let fadeAlpha = p.alpha;
      if (p.life < 30) {
        fadeAlpha = p.alpha * (p.life / 30);
      } else if (p.life > p.maxLife - 60) {
        fadeAlpha = p.alpha * ((p.maxLife - p.life) / 60);
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + fadeAlpha + ")";
      ctx.fill();

      // Subtle glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color + (fadeAlpha * 0.2) + ")";
      ctx.fill();
    }

    requestAnimationFrame(update);
  }

  resize();
  window.addEventListener("resize", resize);

  // Seed initial particles
  for (let i = 0; i < 20; i++) {
    spawnParticle();
  }

  update();
}
