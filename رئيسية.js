
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