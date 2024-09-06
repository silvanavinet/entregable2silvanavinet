const productos = [
    { nombre: "Producto 1", cantidad: 2, precio: 15000 },
    { nombre: "Producto 2", cantidad: 1, precio: 10000 },
    { nombre: "Producto 3", cantidad: 3, precio: 5000 }
];


if ( localStorage.getItem("mis_reservas") == null ){
    localStorage.setItem("mis_reservas", JSON.stringify([]))
}

const modal = document.getElementById("modalResumen");
const btnOpenModal = document.getElementById("openModal");
const spanClose = document.getElementsByClassName("close")[0];

// btnOpenModal.onclick = function() {
//     modal.style.display = "block";
//     cargarResumenCompra();
// }

spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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



document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const ageInput = document.getElementById("ageInput").value;
    const messageDiv = document.getElementById("message");
    
    try {
        messageDiv.innerHTML = ""; 

        if (ageInput === "" || isNaN(ageInput)) {
            throw new Error("Debe ingresar una edad válida");
        }

        const edad = parseInt(ageInput);

        if (edad < 18) {
            Array.from(document.getElementsByClassName("button-cancelar"))
            .forEach(element => {
                element.style.display="none"
            });
            throw new Error("La persona es menor de 18 años");
        }

        messageDiv.innerHTML = `<p id="success">La persona es mayor de 18 años.</p>`;
    } catch (error) {
        messageDiv.innerHTML = `<p id="error">Error: ${error.message}</p>`;
    } finally {
        console.log("Validación de edad finalizada."); 
    }
});
