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
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
// التعديل هنا: بنقوله هات الـ nav-links اللي جوه الـ navbar بتاع الهيدر بس!
const navLinksList = document.querySelector('header.navbar .nav-links'); 

// شرط أمان عشان نضمن إن العناصر موجودة فعلياً في الصفحة قبل ما يشتغل
if (mobileMenuBtn && navLinksList) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.preventDefault(); // بيمنع أي سلوك تلقائي غريب للمتصفح
    
    // يفتح ويقفل القائمة
    navLinksList.classList.toggle('open-menu');
    
    // يغير شكل الزرار لـ X
    mobileMenuBtn.classList.toggle('active-btn');
  });
}