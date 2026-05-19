document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // تأثير نبض عند الضغط
    this.innerText = "جاري معالجة البلاغ...";
    this.style.background = "#d4af37";
    
    setTimeout(() => {
        alert("تم استلام بلاغك بنجاح. وحدة رصد الأحداث ستتعامل مع الموقف فوراً.");
        this.innerText = "تم الإرسال ✓";
        this.style.background = "#28a745";
    }, 2000);
});

// إضافة تأثير ظهور تدريجي للصورة عند التمرير
window.addEventListener('scroll', function() {
    const img = document.querySelector('.image-box');
    const position = img.getBoundingClientRect().top;
    if(position < window.innerHeight) {
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
    }
});
document.querySelector('.report-section button').onclick = function(e) {
    e.preventDefault();
    let btn = this;
    
    // تأثير "جارِ التشفير"
    btn.innerHTML = "SENDING ENCRYPTED DATA...";
    btn.style.borderColor = "#ff0000";
    btn.style.color = "#ff0000";
    
    // هزة للجهاز/الشاشة
    document.body.style.animation = "glitch-red 0.2s 3";
    
    setTimeout(() => {
        btn.innerHTML = "DATA SENT SUCCESSFULY ✓";
        btn.style.borderColor = "#28a745";
        btn.style.color = "#28a745";
        document.body.style.animation = "";
    }, 1500);
};

// أنيميشن الوميض
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes glitch-red {
    0% { background: rgba(255,0,0,0.1); transform: translate(2px, 2px); }
    50% { background: transparent; transform: translate(-2px, -2px); }
    100% { background: rgba(0,210,255,0.1); transform: translate(0); }
}`;
document.head.appendChild(styleSheet);document.querySelector('.report-section button').onclick = function(e) {
    e.preventDefault();
    let btn = this;
    
    // 1. مرحلة الإرسال (تغيير مؤقت)
    btn.innerHTML = "جاري التشفير وإرسال البيانات...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
        // 2. مرحلة النجاح (الأكشن الحقيقي)
        btn.classList.add('success-state'); // تفعيل الشكل المشطوف الأخضر
        btn.innerHTML = "✓ تم اختراق الحجب وإرسال البلاغ";
        
        // 3. إضافة هزة خفيفة للشاشة تأكيداً للإرسال
        document.querySelector('.report-section').style.animation = "final-pulse 0.4s ease";
    }, 1500);
};

// أنيميشن النبضة النهائية
const style = document.createElement('style');
style.innerHTML = `
@keyframes final-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); box-shadow: 0 0 50px rgba(0, 210, 255, 0.5); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(style);
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