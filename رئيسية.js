
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // نجهز الكروت تحت ومختفية
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // ظهور تدريجي "تكتيكي"
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // فرق 100ms بين كل كارد والتاني
    });
});
const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#00e5ff';
        card.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(0, 229, 255, 0.1)';
        card.style.boxShadow = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const mainSection = document.querySelector('main');
    if (mainSection) {
        mainSection.style.transition = "margin-top 1s ease";
        mainSection.style.marginTop = "60px"; // المسافة اللي إنتي عايزاها
    }
});
// التقطنا الزرار سواء كان مكتوب في الـ HTML كـ id أو class
const mobileMenuBtn = document.querySelector('#mobileMenuBtn, .menu-toggle-btn');
const navLinksList = document.querySelector('header.navbar .nav-links'); 

if (mobileMenuBtn && navLinksList) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    // يضيف أو يحذف الكلاس المسؤول عن الفتح
    navLinksList.classList.toggle('open-menu');
    
    // يغير شكل الزرار لـ X
    mobileMenuBtn.classList.toggle('active-btn');
    
    // سطر للتأكد في المتصفح أن الضغطة تعمل (يمكنكِ حذفه لاحقاً)
    console.log("الموقع شغال والقائمة حالتها الآن: ", navLinksList.classList.contains('open-menu'));
  });
}