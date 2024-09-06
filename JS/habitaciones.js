const habitacionesLoft = [
  {
    id: 1,
    nombre: "Habitación 1",  
    cama: "dos plazas",
    vista: "bosque",
    precio: 45000,
    image: "../assets/habitacion1.png"
  },
  {
    id: 2,  
    nombre: "Habitación 2",
    cama: "dos plazas",
    vista: "mar",
    precio: 35000,
    image: "../assets/habitacion2.png"
  }
];



let habitaciones = document.getElementById("lista-habitaciones")

function renderHabitaciones(habitacionesArray){

  
  fetch("/JS/data/habitaciones.json")
    .then(respuesta => respuesta.json())
    .then(data => { 

      data.forEach ( habitacion => {
        const card = document.createElement("div")
        const idHabitacion = habitacion.id
        card.innerHTML = `
          <div id="${idHabitacion}" class="card-habitacion" style="display: flex; margin: 30px;">
            <div style="width: 50%;">
              <img style="width: -webkit-fill-available;" src="${habitacion.image}" alt="Habitación 1">
            </div>
            <div style="width: 50%;background-color: darkseagreen;/* opacity: 30%;">
              <h2>${habitacion.nombre}</h2>
              <p> Excelente habitación con cama de ${habitacion.cama} y vista al ${habitacion.vista}</p>
              <form id="form-habitacion">
                <label for="fechaLlegada">Fecha de Llegada:</label>
                <input type="date" id="fechaLlegada" required>
                <label for="salida">Salida</label>
                <input type="date" id="fechaSalida" required>
                <button class="button-cancelar" id="comprobarDisponibilidad">Comprobar Disponibilidad</button>
                <input class="button-cancelar" id="pagar-button" type="submit" value="Pagar">
                <div class="resultado-reserva">
                  *resultado reserva
                </div>
              </form>
            </div>
          </div>
        `
  
        habitaciones.appendChild(card)
      
        const fechaLlegadaInput = card.querySelector("#fechaLlegada");
        const fechaSalidaInput = card.querySelector("#fechaSalida");
        const btnComprobar = card.querySelector("#comprobarDisponibilidad");
        const modalFactibilidad = card.querySelector("#modalFactibilidad");
        const spanClose = card.querySelector(".close");
        const mensajeFactibilidad = card.querySelector("#mensajeFactibilidad");
        const formPagar = card.querySelector("#pagar-button")
        
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
        
        btnComprobar.addEventListener("click",function(e){
          e.preventDefault()
          if (fechaLlegadaInput.value.length > 0 
            && fechaSalidaInput.value.length > 0){
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Disponible desde ${fechaLlegadaInput.value} al ${fechaSalidaInput.value}`,
                showConfirmButton: false,
                timer: 1500
              });
            }
        });
        
        formPagar.addEventListener("click", function(e){
          e.preventDefault();
          if (fechaLlegadaInput.value.length > 0 
            && fechaSalidaInput.value.length > 0){
              console.log(habitacion)
              modal.style.display = "block";
              var fechaInicio = new Date(fechaLlegadaInput.value).getTime();
              var fechaFin    = new Date(fechaSalidaInput.value).getTime();
              var diff = fechaFin - fechaInicio;
              console.log(diff/(1000*60*60*24) );

              let detalleModal = document.getElementById("detalleCompra")
              detalleModal.innerHTML=`
              <td id="detalleCompraHabitacion">${habitacion.nombre} </td>
              <td id="detalleCompraNoches">${diff/(1000*60*60*24)}</td>
              <td id="detalleCompraLlegada">${fechaLlegadaInput.value}</td>
              <td id="detalleCompraSalida">${fechaSalidaInput.value}</td>
              <td id="detalleCompraValor">$ ${diff/(1000*60*60*24) * habitacion.precio}</td>
              `
            }
          
        })
    })
 
  } )
    
}


renderHabitaciones(habitacionesLoft)




function setFechaMinima(fechaLlegadaInput, fechaSalidaInput) {
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
}






