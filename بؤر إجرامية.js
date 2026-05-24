document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. زرار السهم للأعلى
    // ==========================================
    const scrollBtn = document.getElementById("scrollToTop");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        window.addEventListener("scroll", () => {
            scrollBtn.style.display =
                (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
                ? "flex" : "none";
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

        document.addEventListener('click', (e) => {
            if (navbarEl && !navbarEl.contains(e.target) && navLinksList.classList.contains('open-menu')) {
                navLinksList.classList.remove('open-menu');
                mobileMenuBtn.classList.remove('active-btn');
            }
        });
    }

    // ==========================================
    // 3. حركة ناعمة للكاردات — شغالة على كل الأجهزة
    // ==========================================
    document.querySelectorAll('.media-card, .text-details-card').forEach(card => {

        // لما الماوس يدخل — توهج خفيف
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
            card.style.transform  = 'translateY(-6px)';
            card.style.boxShadow  = '0 15px 35px rgba(0, 229, 255, 0.2)';
        });

        // لما الماوس يخرج — يرجع لمكانه
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
            card.style.transform  = 'translateY(0)';
            card.style.boxShadow  = '0 0 30px rgba(0, 229, 255, 0.12)';
        });

        // تأثير الضغط — يتضغط بسيط
        card.addEventListener('mousedown', () => {
            card.style.transform = 'translateY(-2px) scale(0.99)';
        });

        card.addEventListener('mouseup', () => {
            card.style.transform = 'translateY(-6px)';
        });
    });

});

// ==========================================
// 4. خلفية الجسيمات
// ==========================================
if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00d2ff" },
            shape: { type: "circle" },
            opacity: { value: 0.35, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00d2ff", opacity: 0.25, width: 1 },
            move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            }
        },
        retina_detect: true
    });
}