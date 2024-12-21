document.addEventListener('DOMContentLoaded', function () {
    const question = document.querySelector('.question');
    const gif = document.querySelector('.gif');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const body = document.querySelector('body');
    const defaultImage = document.querySelector('#default-image');

    // Sự kiện khi nhấn nút "Có"
    yesBtn.addEventListener('click', () => {
        body.classList.add('love-bg');  // Thêm hiệu ứng background với ảnh trái tim
        question.innerHTML = 'I love you too !!!';
        defaultImage.style.display = 'none'; // Ẩn ảnh mặc định
        gif.style.display = 'block';  // Hiển thị ảnh trái tim
        yesBtn.style.display = 'none';  // Ẩn nút "Có"
        noBtn.style.display = 'none';  // Ẩn nút "Không"
    });

    // Sự kiện khi di chuột qua nút "Không"
    noBtn.addEventListener('mouseover', () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
});
