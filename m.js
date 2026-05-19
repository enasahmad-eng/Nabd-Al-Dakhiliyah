const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let dots = [];
const mouse = { x: null, y: null };

// ضبط حجم الكانفاس
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
resize();

// إنشاء النقط
for (let i = 0; i < 80; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";

    dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // ارتداد من الحواف
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // رسم النقطة
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // التفاعل مع الماوس (رسم خطوط)
        let dx = mouse.x - dot.x;
        let dy = mouse.y - dot.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
    requestAnimationFrame(draw);
}
draw();