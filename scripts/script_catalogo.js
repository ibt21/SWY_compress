const productos = {
    baja: [
        { 
            nombre: "SWY Breeze", 
            descripcion: "10-15 mmHg · Algodón", 
            precio: "$299", 
            color: "rojo",
            imagen: "../Assets/mdcerdito.png" 
        },
        { 
            nombre: "SWY Chill", 
            descripcion: "10-15 mmHg · Bambú", 
            precio: "$329", 
            color: "rojo",
            imagen: "../Assets/mdsperro.png"   
        },
        { 
            nombre: "SWY Casual", 
            descripcion: "10-15 mmHg · Algodón", 
            precio: "$279", 
            color: "rojo",
            imagen: "../Assets/mdrana.png" 
        }
    ],
    media: [
        { 
            nombre: "SWY Flow", 
            descripcion: "15-20 mmHg · Algodón", 
            precio: "$349", 
            color: "morado",
            imagen: "../Assets/mdraton.png" 
        },
        { 
            nombre: "SWY Pulse", 
            descripcion: "15-20 mmHg · Bambú", 
            precio: "$379", 
            color: "morado",
            imagen: "../Assets/pulse.jpg" 
        },
        { 
            nombre: "SWY Glide", 
            descripcion: "15-20 mmHg · Algodón", 
            precio: "$329", 
            color: "morado",
            imagen: "../Assets/glide.jpg"   
        }
    ],
    alta: [
        { 
            nombre: "SWY Max", 
            descripcion: "20-25 mmHg · Algodón", 
            precio: "$399", 
            color: "lima",
            imagen: "../Assets/max.jpg"   
        },
        { 
            nombre: "SWY Pro", 
            descripcion: "20-25 mmHg · Bambú", 
            precio: "$429", 
            color: "lima",
            imagen: "../Assets/mdsalien.png"    
        },
        { 
            nombre: "SWY Elite", 
            descripcion: "20-25 mmHg · Algodón", 
            precio: "$389", 
            color: "lima",
            imagen: "../Assets/msdconejo.png"  
        }
    ]
};

// Función para renderizar productos con imágenes reales
function renderProductos(categoria, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const productosCat = productos[categoria];
    
    productosCat.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        
        // Verificar si la imagen existe, si no, mostrar placeholder
        const imagenHtml = producto.imagen ? 
            `<img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img-real">` : 
            `<div class="placeholder-img"></div>`;
        
        card.innerHTML = `
            <div class="producto-imagen">
                ${imagenHtml}
            </div>
            <div class="producto-info">
                <div class="producto-nombre">${producto.nombre}</div>
                <div class="producto-descripcion">${producto.descripcion}</div>
                <div class="producto-precio">${producto.precio}</div>
                <button class="btn-agregar" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar al carrito</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Renderizar todas las categorías
renderProductos('baja', 'baja-grid');
renderProductos('media', 'media-grid');
renderProductos('alta', 'alta-grid');

// ========== FUNCIONALIDAD AGREGAR AL CARRITO ==========
function agregarAlCarrito(nombre, precio) {
    // Obtener carrito actual del localStorage
    let carrito = JSON.parse(localStorage.getItem('swy_carrito')) || [];
    
    // Buscar si el producto ya existe
    const existe = carrito.find(item => item.nombre === nombre);
    
    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({
            nombre: nombre,
            precio: parseInt(precio.replace('$', '')),
            cantidad: 1
        });
    }
    
    // Guardar en localStorage
    localStorage.setItem('swy_carrito', JSON.stringify(carrito));
    
    // Feedback visual
    alert(`¡${nombre} agregado al carrito!`);
}

// Agregar event listeners a los botones después de renderizar
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-agregar')) {
        const nombre = e.target.getAttribute('data-nombre');
        const precio = e.target.getAttribute('data-precio');
        agregarAlCarrito(nombre, precio);
    }
});

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
