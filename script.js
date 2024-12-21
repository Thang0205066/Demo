document.addEventListener('DOMContentLoaded', function () {
    const question = document.querySelector('.question');
    const gif = document.querySelector('.gif');
    const yesBtn = document.querySelector('.yes-btn');  // Khớp với class trong HTML
    const noBtn = document.querySelector('.no-btn');    // Khớp với class trong HTML

    // Sự kiện khi nhấn nút "Có"
    yesBtn.addEventListener('click', () => {
        question.innerHTML = 'I love you too !!!';
        gif.src = 'https://i.imgur.com/amdHoPl.jpeg';
        gif.style.display = 'block';  // Hiển thị hình ảnh gif
    });

    // Sự kiện khi di chuột qua nút "Không"
    noBtn.addEventListener('mouseover', () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = 'absolute'; // Cần thêm position absolute để nút di chuyển
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
});
