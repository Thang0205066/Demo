// Đảm bảo rằng DOM đã sẵn sàng trước khi gắn sự kiện
document.addEventListener('DOMContentLoaded', function () {
    const question = document.querySelector('.question');
    const gif = document.querySelector('.gif');
    const yesBtn = document.querySelector('.yes-Btn');
    const noBtn = document.querySelector('.no-Btn');

    // Sự kiện khi nhấn nút "Có"
    yesBtn.addEventListener('click', () => {
        question.innerHTML = 'I love you too !!!';
        gif.src = 'https://i.imgur.com/amdHoPl.jpeg';
        gif.style.display = 'block';
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
