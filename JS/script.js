let tarjetas = document.querySelectorAll(".card");

// Recorremos cada tarjeta encontrada
tarjetas.forEach(card => {
    let id = card.getAttribute("data-id");
    let idNumerico = parseInt(id);

  
    let producto = productos[idNumerico - 1]; 
    if (producto) { 
        let info = card.querySelector(".info");
        let acciones = card.querySelector(".acciones"); 

     
        info.innerHTML =
            '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" width="150">' +
            '<h5>' + producto.nombre + '</h5>' +
            '<p>Precio: $' + producto.precio.toLocaleString('es-CO') + '</p>'; 
        
        if (acciones) {
            acciones.innerHTML = 
                '<button class="btn btn-primary btn-agregar mt-2" data-id="' + id + '">Agregar al Carrito</button>';
        }

    } else {
        console.error(`Error: No se encontró el producto con ID ${id}`);
    }
});
//funcion

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
// agregar productos al carrito
function agregarAlCarrito(idProducto) {
    const id = parseInt(idProducto);
    const item = productos.find(p => p.id === id);

    if (!item) return;

    const existe = carrito.find(prod => prod.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...item, cantidad: 1 });
    }


    guardarCarrito();
    actualizarCarritoUI();
    animacionProductoAgregado(item.nombre)



}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-agregar')) {
        let productoId = e.target.getAttribute('data-id');
        agregarAlCarrito(productoId);
    }
});


function actualizarCarritoUI() {
    const totalItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    const contador = document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = totalItems;
        contador.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

function animacionProductoAgregado(nombreProducto) {
    // Muestra un mensaje simple de confirmación
    alert(`🛒 ¡Producto agregado! "${nombreProducto}" se ha añadido al carrito.`);
}



document.addEventListener('DOMContentLoaded', actualizarCarritoUI);