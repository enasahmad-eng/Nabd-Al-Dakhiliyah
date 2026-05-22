function securityPulse() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 229, 255, 0.03); z-index: 9999; pointer-events: none;
        opacity: 0; transition: opacity 0.1s;
    `;
    document.body.appendChild(overlay);

    setInterval(() => {
        overlay.style.opacity = '1';
        setTimeout(() => overlay.style.opacity = '0', 50);
    }, Math.random() * 15000 + 5000); // وقت عشوائي بين 5 لـ 20 ثانية
}
securityPulse();
// في الجافا سكريبت
function createParticle() {
    const p = document.createElement('div');
    p.className = 'data-particle';
    p.innerText = Math.random() > 0.5 ? '0' : '1';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '-20px';
    p.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}
setInterval(createParticle, 200); // بيعمل رقم كل 0.2 ثانية
function createTechCircle() {
    const circle = document.createElement('div');
    const size = Math.random() * 150 + 50;
    
    circle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        border: 1px solid rgba(0, 229, 255, 0.1);
        border-radius: 50%;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        z-index: -1;
        pointer-events: none;
        animation: pulseFade 4s forwards;
    `;
    
    document.body.appendChild(circle);
    setTimeout(() => circle.remove(), 4000);
}

// إضافة الـ Animation للـ CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulseFade {
    0% { transform: scale(0.5); opacity: 0; }
    50% { opacity: 0.3; }
    100% { transform: scale(1.2); opacity: 0; }
}`;
document.head.appendChild(style);

setInterval(createTechCircle, 2000); // دائرة كل ثانيتين
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tech-canvas-container');

    // 1. تأثير كشاف النور (Glow)
  // تعديل جزء الـ Glow في الكود بتاعك
const glow = document.createElement('div');
glow.style.cssText = `
    position: absolute; 
    width: 100%; 
    height: 100%;
    /* استبدال الألوان بـ rgba عشان تكون شفافة */
    background: radial-gradient(circle at center, rgba(26, 58, 95, 0.5) 0%, transparent 70%);
    transition: background 0.1s ease;
    /* الخاصية دي بتخلي النور يندمج مع الخلفية اللي وراه */
    mix-blend-mode: screen; 
    pointer-events: none;
`;
container.appendChild(glow);
    // 2. تأثير الدوائر التقنية (Tech Pulse)
    function createPulse() {
        const pulse = document.createElement('div');
        const size = Math.random() * 200 + 100;
        pulse.style.cssText = `
            position: absolute;
            width: ${size}px; height: ${size}px;
            border: 1px solid rgba(0, 229, 255, 0.2);
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            opacity: 0;
            transform: scale(0.5);
            transition: all 3s ease-out;
        `;
        container.appendChild(pulse);

        // تشغيل الحركة برمجياً
        setTimeout(() => {
            pulse.style.opacity = '0.3';
            pulse.style.transform = 'scale(1.2)';
            setTimeout(() => {
                pulse.style.opacity = '0';
                setTimeout(() => pulse.remove(), 3000);
            }, 3000);
        }, 100);
    }

    setInterval(createPulse, 2500); // دائرة كل ثانيتين ونصف
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