// ========== MENÚ HAMBURGUESA ==========
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ========== CARRITO ==========

// Productos predefinidos (simulados)
const productosDisponibles = {
    1: { nombre: "SWY Flow", tipo: "Compresión Media", precio: 349, color: "morado", icono: "🧦" },
    2: { nombre: "SWY Breeze", tipo: "Compresión Baja", precio: 299, color: "rojo", icono: "🧦" },
    3: { nombre: "SWY Max", tipo: "Compresión Alta", precio: 399, color: "lima", icono: "🧦" }
};

// Cargar carrito del localStorage
let carrito = JSON.parse(localStorage.getItem('swy_carrito')) || [];

// Agregar producto de ejemplo si está vacío (para demostración)
if (carrito.length === 0) {
    carrito = [
        { id: 1, cantidad: 1 },
        { id: 2, cantidad: 2 }
    ];
    localStorage.setItem('swy_carrito', JSON.stringify(carrito));
}

// Renderizar carrito
function renderizarCarrito() {
    const container = document.getElementById('carritoProductos');
    const vacioDiv = document.getElementById('carritoVacio');
    const carritoGrid = document.querySelector('.carrito-grid');
    
    if (!container) return;
    
    if (carrito.length === 0) {
        container.innerHTML = '';
        carritoGrid.style.display = 'none';
        vacioDiv.style.display = 'block';
        return;
    }
    
    carritoGrid.style.display = 'grid';
    vacioDiv.style.display = 'none';
    
    let subtotal = 0;
    container.innerHTML = '';
    
    carrito.forEach((item, index) => {
        const producto = productosDisponibles[item.id];
        if (!producto) return;
        
        const subtotalItem = producto.precio * item.cantidad;
        subtotal += subtotalItem;
        
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto-item';
        productoDiv.innerHTML = `
            <div class="producto-imagen">${producto.icono}</div>
            <div class="producto-info">
                <div class="producto-nombre">${producto.nombre}</div>
                <div class="producto-tipo">${producto.tipo}</div>
                <div class="producto-precio">$${producto.precio}</div>
            </div>
            <div class="producto-cantidad">
                <button onclick="cambiarCantidad(${index}, -1)">-</button>
                <span>${item.cantidad}</span>
                <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </div>
            <button class="btn-eliminar" onclick="eliminarProducto(${index})">🗑️</button>
        `;
        container.appendChild(productoDiv);
    });
    
    const envio = subtotal > 0 ? 99 : 0;
    const total = subtotal + envio;
    
    document.getElementById('subtotal').innerText = `$${subtotal}`;
    document.getElementById('envio').innerText = envio === 0 ? 'Gratis' : `$${envio}`;
    document.getElementById('total').innerText = `$${total}`;
}

// Cambiar cantidad
window.cambiarCantidad = function(index, delta) {
    if (carrito[index]) {
        const nuevaCantidad = carrito[index].cantidad + delta;
        if (nuevaCantidad <= 0) {
            carrito.splice(index, 1);
        } else {
            carrito[index].cantidad = nuevaCantidad;
        }
        localStorage.setItem('swy_carrito', JSON.stringify(carrito));
        renderizarCarrito();
    }
};

// Eliminar producto
window.eliminarProducto = function(index) {
    carrito.splice(index, 1);
    localStorage.setItem('swy_carrito', JSON.stringify(carrito));
    renderizarCarrito();
};

// Modal de pago
const modal = document.getElementById('modalPago');
const btnPagar = document.getElementById('btnPagar');
const closeModal = document.getElementById('closeModal');
const confirmarPago = document.getElementById('confirmarPago');

if (btnPagar) {
    btnPagar.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }
        modal.style.display = 'flex';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

if (confirmarPago) {
    confirmarPago.addEventListener('click', () => {
        alert('¡Compra realizada con éxito! (Simulación)');
        carrito = [];
        localStorage.setItem('swy_carrito', JSON.stringify(carrito));
        renderizarCarrito();
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Inicializar
renderizarCarrito();