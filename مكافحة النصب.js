document.addEventListener("DOMContentLoaded", function() {
    // 1. إضافة كلاس الـ Reveal لكل الكتل عشان تظهر تدريجياً
    const sections = document.querySelectorAll('.info-block, .media-container, .evidence-section, .cyber-report-card');
    sections.forEach(sec => sec.classList.add('reveal'));

    // 2. وظيفة مراقبة التمرير (Scroll Reveal)
    const revealOnScroll = () => {
        sections.forEach(sec => {
            const windowHeight = window.innerHeight;
            const revealTop = sec.getBoundingClientRect().top;
            const revealPoint = 100;

            if (revealTop < windowHeight - revealPoint) {
                sec.classList.add('active');
            }
        });
    };

    // تشغيل الفانكشن عند التمرير
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // تشغيلها مرة عند التحميل

    // 3. تأثير الهاشتاج النابض
    const hashtag = document.querySelector('.hashtag');
    if(hashtag) {
        hashtag.classList.add('hashtag-animate');
    }

    // 4. تأثير "كتابة الآلة" للعنوان الرئيسي (Typewriter Effect)
    const title = document.querySelector('.main-title');
    const text = title.innerText;
    title.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
document.addEventListener("DOMContentLoaded", function() {
    // 1. إضافة خط السكانر يدوياً
    const scan = document.createElement('div');
    scan.className = 'scanline';
    document.body.appendChild(scan);

    // 2. تأثير الـ Counter للأرقام (بيخلي الأرقام تعد بسرعة)
    const counters = document.querySelectorAll('.evidence-grid span');
    counters.forEach(counter => {
        const fullText = counter.innerText;
        const number = fullText.match(/\d+/); // بيطلع الرقم من الجملة
        
        if (number) {
            let count = 0;
            const target = parseInt(number[0]);
            const increment = target / 50;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = fullText.replace(number[0], Math.ceil(count));
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = fullText;
                }
            };
            updateCount();
        }
    });

    // 3. تأثير "الدخول الآمن" (Security Access)
    const card = document.querySelector('.cyber-report-card');
    card.style.opacity = '0';
    
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease-in';
        card.style.opacity = '1';
        // صوت "beep" خفيف لو حبيتي (اختياري)
        console.log("SYSTEM ACCESS GRANTED");
    }, 500);

    // 4. جعل الهاشتاج ينبض عند التمرير فقط
    const hashtag = document.querySelector('.hashtag');
    hashtag.addEventListener('mouseover', () => {
        hashtag.style.letterSpacing = '5px';
    });
    hashtag.addEventListener('mouseout', () => {
        hashtag.style.letterSpacing = 'normal';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hashtag = document.querySelector('.hashtag');
    
    // تأثير "التنفس" التلقائي للهاشتاج
    let space = 2;
    let growing = true;
    
    setInterval(() => {
        if (growing) {
            space += 0.1;
            if (space >= 6) growing = false;
        } else {
            space -= 0.1;
            if (space <= 2) growing = true;
        }
        hashtag.style.letterSpacing = space + 'px';
    }, 50);

    // تفاعل الماوس لزيادة الهيبة
    hashtag.addEventListener('mouseenter', () => {
        hashtag.style.textShadow = "0 0 40px #00e5ff, 0 0 60px #00e5ff";
        hashtag.style.transform = "scale(1.1)";
    });

    hashtag.addEventListener('mouseleave', () => {
        hashtag.style.textShadow = "0 0 20px rgba(0, 229, 255, 0.6)";
        hashtag.style.transform = "scale(1)";
    });
});