
const card = document.querySelector('.card-container');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25; // تحكم في قوة الميل
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// إعادة الكارد لوضعه الطبيعي عند خروج الماوس
document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "all 0.5s ease";
});

document.addEventListener('mouseenter', () => {
    card.style.transition = "none";
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