// Menú hamburguesa
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ========== ACORDEONES ==========
const accordionButtons = document.querySelectorAll('.accordion-header');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // Cerrar todos
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abrir el actual si no estaba activo
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// Opcional: abrir el primero por defecto
document.querySelector('.accordion-item')?.classList.add('active');