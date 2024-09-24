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

document.addEventListener("DOMContentLoaded", function() {
    const fechaLlegadaInput = document.getElementById("fechaLlegada");
    const fechaSalidaInput = document.getElementById("fechaSalida");
    const btnComprobar = document.getElementById("comprobarDisponibilidad");
    const modalFactibilidad = document.getElementById("modalFactibilidad");
    const spanClose = document.querySelector(".close");
    const mensajeFactibilidad = document.getElementById("mensajeFactibilidad");
    

    const hoy = new Date();
    const year = hoy.getFullYear();
    const month = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const day = hoy.getDate().toString().padStart(2, '0');
    const fechaHoy = `${year}-${month}-${day}`;
    
    fechaLlegadaInput.min = fechaHoy;

    fechaLlegadaInput.addEventListener("change", function() {
        fechaSalidaInput.min = fechaLlegadaInput.value;
    });

    fechaSalidaInput.addEventListener("change", function() {
        if (fechaSalidaInput.value < fechaLlegadaInput.value) {
            fechaSalidaInput.value = "";
            alert("La fecha de salida no puede ser anterior a la fecha de llegada.");
        }
    });
});

btnComprobar.addEventListener("click", function() {

    mostrarModal("Hay disponibilidad para las fechas seleccionadas.");
});

function mostrarModal(mensaje) {
    mensajeFactibilidad.textContent = mensaje;
    modalFactibilidad.style.display = "block";
}

spanClose.addEventListener("click", function() {
    modalFactibilidad.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modalFactibilidad) {
        modalFactibilidad.style.display = "none";
    }
});