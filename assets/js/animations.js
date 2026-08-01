// مؤشر الفأرة المخصص
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
    if(cursor) {
        cursor.style.top = e.clientY + 'px';
        cursor.style.left = e.clientX + 'px';
    }
});
