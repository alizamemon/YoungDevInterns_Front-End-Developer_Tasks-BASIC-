document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;

    const showImage = (idx) => {
        const offset = -idx * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index - 1 + images.length) <= 0 ? images.length - 1 : (index - 1 + images.length) % images.length;
        showImage(index);
    });

    nextButton.addEventListener('click', () => {
        index = (index + 1) % images.length;
        showImage(index);
    });

    // =====Auto-slide every 5 seconds======
    setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
    }, 5000);
});
