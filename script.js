// แท็บสลับ
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // ลบ active จากปุ่มทุกปุ่ม
        tabButtons.forEach(b => b.classList.remove('active'));
        // เพิ่ม active ให้ปุ่มที่คลิก
        btn.classList.add('active');

        // ซ่อนทุก tab-content
        tabContents.forEach(tab => tab.style.display = 'none');

        // แสดง tab-content ที่เลือก
        const target = document.getElementById(btn.dataset.tab);
        if(target.id === 'profile') {
            target.style.display = 'grid'; // ใช้ grid สำหรับ profile
        } else {
            target.style.display = 'block'; // block สำหรับ activities
        }
    });
});

// แสดงรูปกิจกรรม (รองรับหลายรูป)
const activityButtons = document.querySelectorAll(".activity-btn");
const activityImage = document.getElementById("activity-image");
const activityIndexes = {}; // เก็บ index ของแต่ละปุ่ม

activityButtons.forEach(button => {
    // แปลง data-img เป็น array
    let imgList = button.getAttribute("data-img").split(',');
    activityIndexes[button.textContent] = 0;

    button.addEventListener("click", () => {
        // ดึง index ปัจจุบัน
        let currentIndex = activityIndexes[button.textContent] || 0;

        // แสดงรูปปัจจุบัน
        activityImage.src = imgList[currentIndex].trim();
        activityImage.style.display = "block";

        // อัปเดต index สำหรับครั้งต่อไป
        activityIndexes[button.textContent] = (currentIndex + 1) % imgList.length;
    });
});
