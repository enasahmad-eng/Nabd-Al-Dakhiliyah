const scrollBtn = document.getElementById("scrollToTop");

scrollBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // حركة ناعمة وانسيابية
    });
});
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, // عدد النقط اللي بتلعب في الجوانب
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#00d2ff" }, // لون النقط (أزرق نيون)
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": {
      "enable": true, // الخطوط اللي بتوصل النقط ببعضها
      "distance": 150,
      "color": "#00d2ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3, // سرعة الحركة
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // لما الماوس يقرب الخطوط بتتشد ناحيته
      "onclick": { "enable": true, "mode": "push" }
    }
  },
  "retina_detect": true
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // نضبط الحالة الابتدائية
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        
        // الظهور التدريجي بناءً على ترتيب الكارت
        setTimeout(() => {
            card.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150); // كل كارت يتأخر 150 ملي ثانية عن اللي قبله
    });
});