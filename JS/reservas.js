const habitacionesLoft = [
    {
      id: 1,
      nombre: "Habitación 1",  
      cama: "dos plazas",
      vista: "bosque",
      precio: 45000
    },
    {
      id: 2,  
      nombre: "Habitación 2",
      cama: "dos plazas",
      vista: "mar",
      precio: 35000
    }
];

let habitaciones = document.getElementById("lista-habitaciones")

function renderHabitaciones(habitacionesArray){
    habitacionesArray.forEach ( habitacion => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${habitacion.nombre}</h3>
                         <p>${habitacion.cama}</p>
                         <p>${habitacion.vista}</p>
                         <p>${habitacion.precio}</p>
                         <button>Agregar</button>`
    })
}

/*function pintarHabitación (habitacion){
    let listaHabitaciones = document.getElementById("lista-habitaciones");

    listaHabitaciones.innerHTML +=```
        <div class="card-habitacion" style="display: flex; margin: 30px;">
                <div style="width: 50%;"> 
                    <img style="width: -webkit-fill-available;" src="/assets/habitacion1.png" alt="Habitación 1">
                </div>
                <div style="width: 50%;background-color: darkseagreen;/* opacity: 30%;">
                    <form action="" id="form-habitacion-1">
                    <label for="birthday">Entrada</label>
                    <input type="date" id="birthday" name="birthday">
                    <label for="birthday">Salida</label>
                    <input type="date" id="birthday" name="birthday">
                    <input type="submit" value="Reservar">
                    </form>
                    <div>
                    *resultado reserva
                    </div>
                </div>
                </div>
```
}*/

document.addEventListener("DOMContentLoaded", function() {
    // Obtener los campos de entrada de fecha
    const fechaLlegadaInput = document.getElementById("fechaLlegada");
    const fechaSalidaInput = document.getElementById("fechaSalida");
    const btnComprobar = document.getElementById("comprobarDisponibilidad");
    const modalFactibilidad = document.getElementById("modalFactibilidad");
    const spanClose = document.querySelector(".close");
    const mensajeFactibilidad = document.getElementById("mensajeFactibilidad");
    
    // Obtener la fecha de hoy en el formato YYYY-MM-DD
    const hoy = new Date();
    const year = hoy.getFullYear();
    const month = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const day = hoy.getDate().toString().padStart(2, '0');
    const fechaHoy = `${year}-${month}-${day}`;
    
    // Establecer la fecha mínima para la llegada como hoy
    fechaLlegadaInput.min = fechaHoy;

    // Evento para actualizar la fecha mínima de salida cuando se cambia la fecha de llegada
    fechaLlegadaInput.addEventListener("change", function() {
        fechaSalidaInput.min = fechaLlegadaInput.value;
    });

    // Evento para asegurar que la fecha de salida no sea antes de la fecha de llegada
    fechaSalidaInput.addEventListener("change", function() {
        if (fechaSalidaInput.value < fechaLlegadaInput.value) {
            fechaSalidaInput.value = "";
            alert("La fecha de salida no puede ser anterior a la fecha de llegada.");
        }
    });
});
// Evento para comprobar disponibilidad
btnComprobar.addEventListener("click", function() {
    // Aquí agregas tu lógica para verificar la disponibilidad
    // Por ahora, asumimos que siempre hay disponibilidad

    // Si hay disponibilidad, muestra el modal
    mostrarModal("Hay disponibilidad para las fechas seleccionadas.");
});

// Función para mostrar el modal con un mensaje específico
function mostrarModal(mensaje) {
    mensajeFactibilidad.textContent = mensaje;
    modalFactibilidad.style.display = "block";
}

// Cierra el modal cuando se hace clic en la "X"
spanClose.addEventListener("click", function() {
    modalFactibilidad.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera del modal
window.addEventListener("click", function(event) {
    if (event.target == modalFactibilidad) {
        modalFactibilidad.style.display = "none";
    }
});



/*let loginForm1 = document.getElementById("form-habitacion-1");
let loginForm2 = document.getElementById("form-habitacion-2");

loginForm1.addEventListener("submit", (e) => {
    e.preventDefault();
    const dates = loginForm1.getElementsByTagName('input')

    let mensajeReserva = ''
    mensajeReserva += 'Gracias por su reserva!' + '</br>'
    mensajeReserva += 'Fecha de entrada: ' + dates[0].value + '</br>'
    mensajeReserva += 'Fecha de salida: ' + dates[1].value

    resultDiv = loginForm1.getElementsByClassName('resultado-reserva')[0]

    resultDiv.innerHTML = mensajeReserva
});*/


/*loginForm2.addEventListener("submit", (e) => {
    e.preventDefault();
   const dates = loginForm2.getElementsByTagName('input')

    let mensajeReserva = ''
    mensajeReserva += 'Gracias por su reserva!' + '</br>'
    mensajeReserva += 'Fecha de entrada: ' + dates[0].value + '</br>'
    mensajeReserva += 'Fecha de salida: ' + dates[1].value

    resultDiv = loginForm2.getElementsByClassName('resultado-reserva')[0]

    resultDiv.innerHTML = mensajeReserva
})*/