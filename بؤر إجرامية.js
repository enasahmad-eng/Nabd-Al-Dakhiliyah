
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