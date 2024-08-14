// Arreglo de objetos de habitaciones.
const habitaciones = [
    {
      id: 1,  
      cama: "dos plazas",
      vista: "bosque",
      jacuzzy: true,
      precio: 45000
    },
    {
      id: 2,  
      cama: "1 plaza",
      vista: "bosque",
      jacuzzy: false,
      precio: 15000
    }
  ];
  
  function bienvenida(nombre, apellido) {
    console.log("¡Cuentanos "+ nombre + " " + apellido + " como podemos ayudarte hoy!");
  }
  
  function calcularCostoTotal(dias, precio) {
    return dias * precio;
  }
  
  // Flujo
  
  alert("¡Bienvenido a Loft el pinar!");
  
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su Apellido");
  
  bienvenida(nombre, apellido);
  
  let edad = parseInt(prompt("Necesitamos saber su edad para continuar con la reserva"));
  
  if (edad >= 18) {
    
    let listarHabitaciones = 'Listado de habitaciones' + "\n"
  
    for (let i = 0; i < habitaciones.length; i++) {
      let habmsj = (i + 1) + ". Habitación nro " + habitaciones[i].id + " tiene cama " + habitaciones[i].cama
      listarHabitaciones = listarHabitaciones + habmsj + "\n"
    }
  
    alert(listarHabitaciones)
  
    let nroHab = parseInt(prompt("Escoga la habitación que desea reservar"));
  
    let dias = parseInt(prompt("¿Por cuántos días desea reservar?"));
  
    let costoTotal = calcularCostoTotal(dias, habitaciones[nroHab - 1].precio);
  
    alert("El costo total de su reserva es de $" + costoTotal);
  
    let codDescuento = prompt("¿tienes un codigo descuento?");
  
    if (codDescuento === "LOFT2024") {
      
      alert("¡Felicidades! tienes un 10% de descuento en tu reserva" + "\n" + "El costo total de tu reserva es de $" + costoTotal * 0.9);
    }
  
  } else {
    alert ("Debe tener al menos 18 años para hacer una reserva.");
  }