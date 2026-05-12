// ========== MENÚ HAMBURGUESA ==========
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener('click', () => {
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'flex';
        }
    });
}

// Cerrar menú al hacer clic en un enlace
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// ========== VALIDACIÓN DEL FORMULARIO ==========
const form = document.getElementById('formContacto');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');

// Función para mostrar mensaje de éxito/error
function mostrarMensaje(tipo, texto) {
    // Eliminar mensaje existente si lo hay
    const mensajeExistente = document.querySelector('.mensaje-form');
    if (mensajeExistente) {
        mensajeExistente.remove();
    }

    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje-form ${tipo}`;
    mensajeDiv.textContent = texto;
    
    form.appendChild(mensajeDiv);
    
    // Scroll suave hasta el mensaje
    mensajeDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
        mensajeDiv.style.opacity = '0';
        setTimeout(() => {
            if (mensajeDiv.parentNode) mensajeDiv.remove();
        }, 300);
    }, 5000);
}

// Validar email con regex
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Manejar envío del formulario
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let esValido = true;
    
    // Validar nombre
    if (!nombreInput.value.trim()) {
        nombreInput.classList.add('error');
        esValido = false;
    } else {
        nombreInput.classList.remove('error');
    }
    
    // Validar email
    if (!emailInput.value.trim() || !validarEmail(emailInput.value)) {
        emailInput.classList.add('error');
        esValido = false;
    } else {
        emailInput.classList.remove('error');
    }
    
    // Validar asunto
    if (!asuntoInput.value.trim()) {
        asuntoInput.classList.add('error');
        esValido = false;
    } else {
        asuntoInput.classList.remove('error');
    }
    
    // Validar mensaje
    if (!mensajeInput.value.trim()) {
        mensajeInput.classList.add('error');
        esValido = false;
    } else {
        mensajeInput.classList.remove('error');
    }
    
    if (!esValido) {
        mostrarMensaje('error', 'Por favor, completa todos los campos correctamente.');
        return;
    }
    
    // Si todo está bien, mostrar éxito
    mostrarMensaje('exito', '¡Mensaje enviado! Te responderemos pronto.');
    
    // Limpiar formulario
    form.reset();
    
    // Aquí iría la lógica para enviar el formulario a tu backend
    // Ejemplo con fetch:
    /*
    const formData = new FormData(form);
    try {
        const response = await fetch('enviar-formulario.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            mostrarMensaje('exito', '¡Mensaje enviado! Te responderemos pronto.');
            form.reset();
        } else {
            mostrarMensaje('error', 'Hubo un problema. Intenta de nuevo más tarde.');
        }
    } catch (error) {
        mostrarMensaje('error', 'Error de conexión. Verifica tu internet.');
    }
    */
});

// Quitar clase error al escribir
[nombreInput, emailInput, asuntoInput, mensajeInput].forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('error');
    });
});