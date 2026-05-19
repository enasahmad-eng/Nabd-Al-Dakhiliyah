
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
