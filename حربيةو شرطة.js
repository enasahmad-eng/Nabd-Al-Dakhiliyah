// تهيئة خلفية الجسيمات (Particles.js)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00d2ff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00d2ff",
      "opacity": 0.2,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  }
});

// إضافة تأثير الظهور التدريجي للنصوص
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.security-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 1s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);
});
document.querySelector('.interactive-event').addEventListener('mousemove', function(e) {
    const card = this;
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    
    // تطبيق الدوران
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
    // تأثير الإضاءة المتوهج
    const glow = card.querySelector('.border-glow-wrapper');
    const shine = `radial-gradient(at ${e.offsetX}px ${e.offsetY}px, rgba(255, 255, 255, 0.3) 0%, transparent 70%)`;
    glow.style.background = shine;
});

// إعادة الصندوق لوضعه الطبيعي عند خروج الماوس
document.querySelector('.interactive-event').addEventListener('mouseleave', function() {
    this.style.transform = `rotateY(0deg) rotateX(0deg)`;
    const glow = this.querySelector('.border-glow-wrapper');
    glow.style.background = 'none'; // إلغاء تأثير الإضاءة
});