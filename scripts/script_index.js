let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

// Asegurar que las imágenes están envueltas correctamente
function wrapImages() {
    const images = document.querySelectorAll('.slides img');
    images.forEach(img => {
        if (!img.parentElement.classList.contains('slide')) {
            const div = document.createElement('div');
            div.classList.add('slide');
            img.parentNode.insertBefore(div, img);
            div.appendChild(img);
        }
    });
}
wrapImages();

function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    currentIndex = index;
    
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
    });
}

// Evento de clic en dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Inicializar
showSlide(0);

// Auto slide cada 4 segundos
setInterval(() => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= totalSlides) nextIndex = 0;
    showSlide(nextIndex);
}, 4000);

// ========== MENÚ HAMBURGUESA ==========
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener('click', () => {
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
            // Animación opcional de las líneas
            menuIcon.classList.remove('active');
        } else {
            mobileMenu.style.display = 'flex';
            menuIcon.classList.add('active');
        }
    });
}