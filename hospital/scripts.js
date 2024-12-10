// تأكيد الإرسال عند تقديم النموذج
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي
    alert("تم تقديم النموذج بنجاح!");
});

// إضافة تأثير عند تمرير الماوس على الأزرار
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', function() {
        button.style.transform = 'scale(1)';
    });
});
// إظهار السهم عند التمرير
window.addEventListener('scroll', function() {
    let scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > window.innerHeight / 2) {
        // إظهار السهم إذا كان التمرير أكثر من منتصف الصفحة
        scrollToTopButton.style.display = 'block';
    } else {
        // إخفاء السهم إذا كان التمرير أقل من منتصف الصفحة
        scrollToTopButton.style.display = 'none';
    }
});

// التمرير للأعلى عند الضغط على السهم
document.getElementById('scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();  // منع الرابط من العمل
    window.scrollTo({ top: 0, behavior: 'smooth' });  // التمرير للأعلى بسلاسة
});

