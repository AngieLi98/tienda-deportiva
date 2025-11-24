
// 1. Seleccionamos todas las tarjetas que tienen data-id
var tarjetas = document.querySelectorAll(".card");

// 2. Recorremos cada tarjeta
for (var i = 0; i < tarjetas.length; i++) {
  var card = tarjetas[i];                 // la casilla actual
  var id = card.getAttribute("data-id");  // el número de producto
  var producto = productos[id - 1];       // buscamos el producto en el array (posición id-1)

  // 3. Reemplazamos el contenido de la casilla
  card.innerHTML = 
    '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" width="150">' +
    '<h5>' + producto.nombre + '</h5>' +
    '<p>Precio: $' + producto.precio + '</p>';
}