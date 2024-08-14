const habitaciones = [
    {
      id: 1,
      nombre: "Habitación 1",  
      cama: "dos plazas",
      vista: "bosque",
      jacuzzy: true,
      precio: 45000
    },
    {
      id: 2,  
      nombre: "Habitación 2",
      cama: "dos plazas",
      vista: "mar",
      jacuzzy: true,
      precio: 35000
    }
];

function pintarHabitación (habitacion){
    let listaHabitaciones = document.getElementById("lista-habitaciones");
    // listaHabitaciones.innerHTML += '<div class="habitacion2">'
    // listaHabitaciones.innerHTML += '     <h3>Habitación 2</h3>'
    // listaHabitaciones.innerHTML +=  '   <img src="/assets/habitacion2.png" alt="Habitación 2"/>'
    // listaHabitaciones.innerHTML +=   '   <p>HERMOSO LOFT CON JACUZZI PRIVADO'
    // listaHabitaciones.innerHTML +=   '    Loft a solo 10 min en auto de la playa de Reñaca y 20 min de Viña del Mar. Ubicado en una parcela privada, con portón de acceso y cámaras de seguridad. Cocina equipada, solo trae tu comida. Incluye sábanas, toallas y batas. Idealmente tener auto, aunque puedes llegar con Uber o Cabify. Somos ecofriendy, reutilizamos aguas grises y reciclamos. No se admiten mascotas.'
    // listaHabitaciones.innerHTML +=   '     Espacio para lectura o relajación. Patio con parrilla, juegos de mesa y libros disponibles.'
    // listaHabitaciones.innerHTML +=  '    </p>'
    // listaHabitaciones.innerHTML +=  '</div>'

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
}

// for (const hab of habitaciones) {
//     pintarHabitación(hab)
// }

let loginForm1 = document.getElementById("form-habitacion-1");
let loginForm2 = document.getElementById("form-habitacion-2");

loginForm1.addEventListener("submit", (e) => {
    e.preventDefault();
    dates = loginForm1.getElementsByTagName('input')

    let mensajeReserva = ''
    mensajeReserva += 'Gracias por su reserva!' + '</br>'
    mensajeReserva += 'Fecha de entrada: ' + dates[0].value + '</br>'
    mensajeReserva += 'Fecha de salida: ' + dates[1].value

    resultDiv = loginForm1.getElementsByClassName('resultado-reserva')[0]

    resultDiv.innerHTML = mensajeReserva
});


loginForm2.addEventListener("submit", (e) => {
    e.preventDefault();
    dates = loginForm2.getElementsByTagName('input')

    let mensajeReserva = ''
    mensajeReserva += 'Gracias por su reserva!' + '</br>'
    mensajeReserva += 'Fecha de entrada: ' + dates[0].value + '</br>'
    mensajeReserva += 'Fecha de salida: ' + dates[1].value

    resultDiv = loginForm2.getElementsByClassName('resultado-reserva')[0]

    resultDiv.innerHTML = mensajeReserva
})