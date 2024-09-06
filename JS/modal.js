const productos = [
    { nombre: "Producto 1", cantidad: 2, precio: 15000 },
    { nombre: "Producto 2", cantidad: 1, precio: 10000 },
    { nombre: "Producto 3", cantidad: 3, precio: 5000 }
];


if ( localStorage.getItem("mis_reservas") == null ){
    localStorage.setItem("mis_reservas", JSON.stringify([]))
}

// Función para mostrar el modal
const modal = document.getElementById("modalResumen");
const btnOpenModal = document.getElementById("openModal");
const spanClose = document.getElementsByClassName("close")[0];

// btnOpenModal.onclick = function() {
//     modal.style.display = "block";
//     cargarResumenCompra();
// }

// Función para cerrar el modal
spanClose.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Función para cargar los detalles de la compra en el modal
function cargarResumenCompra() {
    const detalleCompra = document.getElementById("detalleCompra");
    let total = 0;
    detalleCompra.innerHTML = ""; // Limpiar cualquier contenido previo

    // productos.forEach(producto => {
    //     const subtotal = producto.cantidad * producto.precio;
    //     total += subtotal;

    //     const row = `<tr>
    //                     <td>${producto.nombre}</td>
    //                     <td>${producto.cantidad}</td>
    //                     <td>$${producto.precio.toFixed(2)}</td>
    //                     <td>$${subtotal.toFixed(2)}</td>
    //                 </tr>`;
    //     detalleCompra.innerHTML += row;
    // });

    document.getElementById("totalCompra").textContent = `$${total.toFixed(2)}`;
}

// Manejar la confirmación de la compra
document.getElementById("confirmarCompra").onclick = function() {
    modal.style.display = "none";
    Swal.fire({
        position: "center",
        icon: "success",
        title: `Reserva confirmada`,
        showConfirmButton: false,
        timer: 1500
      });
    
    let detalleCompra = document.getElementById("detalleCompra");
    let detalleCompraHabitacion = document.getElementById("detalleCompraHabitacion");
    let detalleCompraNoches = document.getElementById("detalleCompraNoches");
    let detalleCompraLlegada= document.getElementById("detalleCompraLlegada");
    let detalleCompraSalida=  document.getElementById("detalleCompraSalida");
    let detalleCompraValor= document.getElementById("detalleCompraValor");
    console.log(detalleCompraLlegada.innerHTML)


    let hab = {
        'habitacion': detalleCompraHabitacion.innerHTML,
        'compra': detalleCompraHabitacion.innerHTML,
        'noches': detalleCompraNoches.innerHTML,
        'llegada': detalleCompraLlegada.innerHTML,
        'salida': detalleCompraSalida.innerHTML,
        'valor': detalleCompraValor.innerHTML,
    }

    const mis_reservas = JSON.parse(localStorage.getItem("mis_reservas"))
    mis_reservas.push(hab)
    localStorage.setItem("mis_reservas", JSON.stringify(mis_reservas))


}

document.getElementById("cancelarCompra").onclick = function() {
    modal.style.display = "none";
}
