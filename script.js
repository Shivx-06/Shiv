// เอฟเฟกต์ Fade-in ตอนโหลดหน้า
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = 1;
    }, 200);
});

// แจ้งเตือนตอนส่งฟอร์ม
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("ส่งข้อความเรียบร้อยแล้ว!");
        form.reset();
    });
}
