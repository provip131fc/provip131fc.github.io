
document.addEventListener('DOMContentLoaded', () => {
    // Ngày niêm yến (thay đổi tùy ý)
    const niemyenDate = new Date('2024-11-20T14:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = niemyenDate - now;

        // Tính toán số ngày, giờ, phút, giây
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Cập nhật DOM
        document.getElementById('days').textContent = days < 10 ? `0${days}` : days;
        document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;

        // Nếu hết thời gian, dừng đồng hồ
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.timer').innerHTML = '<h2>Niêm Yến Đã Hoàn Thành!</h2>';
        }
    }

    // Cập nhật mỗi giây
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
