// Seleccionamos todas las tarjetas que tienen la clase "card"
let tarjetas = document.querySelectorAll(".card");

// Recorremos cada tarjeta encontrada
tarjetas.forEach(card => {
  // Obtenemos el valor del atributo "data-id" de la tarjeta actual
  let id = card.getAttribute("data-id");

  // Usamos el id para acceder al producto correspondiente en el array 'productos'
  // (restamos 1 porque los arrays empiezan en índice 0)
  let producto = productos[id - 1]; // Asegúrate de que el array 'productos' esté bien definido

  // Buscamos el contenedor interno ".info" dentro de la tarjeta
  let info = card.querySelector(".info");

  // Reemplazamos el contenido de ".info" con los datos del producto:
  // imagen, nombre y precio
  info.innerHTML =
    '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" width="150">' +
    '<h5>' + producto.nombre + '</h5>' +
    '<p>Precio: $' + producto.precio + '</p>'

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
        carrito.push({...item, cantidad: 1});
    }
 
    guardarCarrito(); // actualizar el carrito actualizado
    actualizarCarritoUI(); //refrescar
    animacionProductoAgregado(item.nombre); 

  }