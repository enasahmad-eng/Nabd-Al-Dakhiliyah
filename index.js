document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. كود زرار السهم (الطلوع لفوق) - محمي ومؤمن
    // ==========================================
    const scrollBtn = document.getElementById("scrollToTop");

    if (scrollBtn) {
        scrollBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollBtn.style.display = "flex";
            } else {
                scrollBtn.style.display = "none";
            }
        });
    }


    // ==========================================
    // 2. كود القائمة المنسدلة (الـ 8 أقسام) - تم تصليحه وتأمينه
    // ==========================================
    const mobileMenuBtn = document.querySelector('#mobileMenuBtn, .menu-toggle-btn');
    const navLinksList = document.querySelector('.navbar .nav-links'); // تم تعديل الاستهداف ليطابق الـ CSS الجديد
    const mainHeaderElement = document.querySelector('.navbar'); // صلحنا الغلطة هنا وعرفنا الهيدر صح

    if (mobileMenuBtn && navLinksList) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            e.stopPropagation(); // يمنع تداخل الضغطات
            
            navLinksList.classList.toggle('open-menu');
            mobileMenuBtn.classList.toggle('active-btn');
            
            console.log("الموقع شغال والقائمة حالتها الآن: ", navLinksList.classList.contains('open-menu'));
        });

        // حركة ذكية: لو ضغطت في أي مكان فاضي في الشاشة والقائمة مفتوحة.. تقفل تلقائي
        document.addEventListener('click', (e) => {
            // صلحنا الـ header وخليناها تنده على العنصر الصح عشان الـ Error يختفي
            if (mainHeaderElement && !mainHeaderElement.contains(e.target) && navLinksList.classList.contains('open-menu')) {
                navLinksList.classList.remove('open-menu');
                mobileMenuBtn.classList.remove('active-btn');
            }
        });
    }


    // ==========================================
    // 3. أنيميشن ظهور الكروت التدريجي (Cards)
    // ==========================================
    const cards = document.querySelectorAll('.card');
    
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.opacity = "0";
            card.style.transform = "translateY(50px)";
            
            setTimeout(() => {
                card.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, index * 150);
        });
    }

});


// ==========================================
// 4. كود النقط والخلفية التفاعلية (Particles)
// ==========================================
if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100, 
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#00d2ff" }, 
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
          "enable": true, 
          "distance": 150,
          "color": "#00d2ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3, 
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
          "onhover": { "enable": true, "mode": "grab" }, 
          "onclick": { "enable": true, "mode": "push" }
        }
      },
      "retina_detect": true
    });
}