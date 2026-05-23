document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. زرار السهم (الطلوع لفوق)
    // ==========================================
    const scrollBtn = document.getElementById("scrollToTop");

    if (scrollBtn) {
        // مخفي في البداية
        scrollBtn.style.display = "none";

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
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
    // 2. القائمة المنسدلة على الموبايل
    // ==========================================
    const mobileMenuBtn = document.querySelector('#mobileMenuBtn, .menu-toggle-btn');
    const navLinksList  = document.querySelector('.navbar .nav-links');
    const navbarEl      = document.querySelector('.navbar');

    if (mobileMenuBtn && navLinksList) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navLinksList.classList.toggle('open-menu');
            mobileMenuBtn.classList.toggle('active-btn');
        });

        // إغلاق القائمة عند الضغط خارجها
        document.addEventListener('click', (e) => {
            if (navbarEl && !navbarEl.contains(e.target) && navLinksList.classList.contains('open-menu')) {
                navLinksList.classList.remove('open-menu');
                mobileMenuBtn.classList.remove('active-btn');
            }
        });
    }

    // ==========================================
    // 3. ظهور الكارد تدريجياً
    // ==========================================
    const card = document.querySelector('.security-card');
    if (card) {
        setTimeout(() => {
            card.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            card.style.opacity    = '1';
            card.style.transform  = 'translateY(0)';
        }, 300);
    }

    // ==========================================
    // 4. تأثير الميل ثلاثي الأبعاد — ديسكتوب فقط
    // ==========================================
    const interactiveBox = document.querySelector('.interactive-event');

    if (interactiveBox && window.innerWidth > 768) {

        interactiveBox.addEventListener('mousemove', function (e) {
            const rect   = this.getBoundingClientRect();
            const xAxis  = (rect.width  / 2 - (e.clientX - rect.left)) / 18;
            const yAxis  = (rect.height / 2 - (e.clientY - rect.top))  / 18;
            this.style.transition = 'none';
            this.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

            const glow   = this.querySelector('.border-glow-wrapper');
            if (glow) {
                glow.style.background = `radial-gradient(at ${e.offsetX}px ${e.offsetY}px, rgba(255,255,255,0.2) 0%, transparent 70%)`;
            }
        });

        interactiveBox.addEventListener('mouseleave', function () {
            this.style.transition = 'transform 0.5s ease';
            this.style.transform  = 'rotateY(0deg) rotateX(0deg)';
            const glow = this.querySelector('.border-glow-wrapper');
            if (glow) glow.style.background = 'none';
        });
    }

});

// ==========================================
// 5. خلفية الجسيمات
// ==========================================
if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00d2ff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.35, random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00d2ff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 2, direction: "none", out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        },
        retina_detect: true
    });
}