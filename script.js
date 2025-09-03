let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Сначала все слайды делают fade-out
    slides.forEach((slide, i) => {
        slide.style.opacity = 0;  // Все слайды исчезают
    });

    // Появляется текущий слайд
    const current = slides[index];
    current.style.opacity = 1;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Переключение на следующий слайд
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Переключение на предыдущий слайд
    showSlide(currentSlide);
}

// Автоматическое переключение слайдов каждые 20 секунд
setInterval(nextSlide, 20000); // Переключать слайды каждые 20 секунд

// Запуск слайдера при загрузке страницы
showSlide(currentSlide);
