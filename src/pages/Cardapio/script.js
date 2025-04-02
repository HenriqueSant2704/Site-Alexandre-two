let currentIndex = 0;

const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const carousel = document.querySelector('.carousel');

function nextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const newTransformValue = -currentIndex * 100; // Desloca 100% da largura
    carousel.style.transform = `translateX(${newTransformValue}%)`;
}

// Intervalo para trocar a imagem automaticamente
setInterval(nextImage, 2500);