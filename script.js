// التأكد من أن الصفحة حملت بالكامل
window.onload = () => {
    const cards = document.querySelectorAll('.card');
    
    // إعداد "المراقب" اللي بيشوف إمتى الكروت بتظهر في الشاشة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // إضافة الكلاس اللي بيعمل الحركة
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 }); // الكارت يبدأ يتحرك لما يظهر منه 20%

    cards.forEach(card => observer.observe(card));
};
