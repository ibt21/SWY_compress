// ========== DATOS DE PRODUCTOS (PLACEHOLDER) ==========
// Aquí puedes reemplazar con tus productos reales cuando tengas imágenes

const productos = {
    baja: [
        { nombre: "SWY Breeze", descripcion: "10-15 mmHg · Algodón", precio: "$299", color: "rojo" "  },
        { nombre: "SWY Chill", descripcion: "10-15 mmHg · Bambú", precio: "$329", color: "rojo" },
        { nombre: "SWY Casual", descripcion: "10-15 mmHg · Algodón", precio: "$279", color: "rojo" }
    ],
    media: [
        { nombre: "SWY Flow", descripcion: "15-20 mmHg · Algodón", precio: "$349", color: "morado" },
        { nombre: "SWY Pulse", descripcion: "15-20 mmHg · Bambú", precio: "$379", color: "morado" },
        { nombre: "SWY Glide", descripcion: "15-20 mmHg · Algodón", precio: "$329", color: "morado" }
    ],
    alta: [
        { nombre: "SWY Max", descripcion: "20-25 mmHg · Algodón", precio: "$399", color: "lima" },
        { nombre: "SWY Pro", descripcion: "20-25 mmHg · Bambú", precio: "$429", color: "lima", imagen: "Assets/msdconejo.png"},
        { nombre: "SWY Elite", descripcion: "20-25 mmHg · Algodón", precio: "$389", color: "lima", imagen: "Assets/mdsalien.png" }
    ]
};

// Función para renderizar productos
function renderProductos(categoria, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const productosCat = productos[categoria];
    
    productosCat.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        
        // Placeholder de imagen (cambia después por tus imágenes reales)
        card.innerHTML = `
            <div class="producto-imagen">
                <div class="placeholder-img">🧦</div>
            </div>
            <div class="producto-info">
                <div class="producto-nombre">${producto.nombre}</div>
                <div class="producto-descripcion">${producto.descripcion}</div>
                <div class="producto-precio">${producto.precio}</div>
                <button class="btn-agregar">Agregar al carrito</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Renderizar todas las categorías
renderProductos('baja', 'baja-grid');
renderProductos('media', 'media-grid');
renderProductos('alta', 'alta-grid');

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
