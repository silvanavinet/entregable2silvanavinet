console.log(localStorage.getItem("mis_reservas")[0])
console.log(JSON.parse(localStorage.getItem("mis_reservas"))[0])
let reservas = JSON.parse(localStorage.getItem("mis_reservas"))

let misReservas = document.getElementById("detalleMisReservas")
misReservas.innerHTML=""

reservas.forEach( element => {
  const row = document.createElement("tr")
  row.setAttribute("id", reservas.indexOf(element));

  row.innerHTML +=`
    <td>${element.compra}</td>
    <td>${element.noches}</td>
    <td>${element.llegada}</td>
    <td>${element.salida}</td>
    <td>${element.valor}</td>
    <td><button class="button">Ver</button></td> 
  `

  misReservas.appendChild(row)

  let button = row.getElementsByTagName("button")[0]
  button.addEventListener('click', e => {
    let modalDetalle = document.getElementById('modalDetalle')
    modalDetalle.style.display = "block";

    let detalleModal = document.getElementById("detalleReservaModal")

    detalleModal.innerHTML = `
      <td>${element.compra}</td>
      <td>${element.noches}</td>
      <td>${element.llegada}</td>
      <td>${element.salida}</td>
      <td>${element.valor}</td>
    `


  })
  document.getElementById("volverReservas").addEventListener("click", () => {
    let modalDetalle = document.getElementById('modalDetalle')
    modalDetalle.style.display = "none";
  })
  document.getElementById("span-close-modal-misreservas")
  .addEventListener("click", () => {
    let modalDetalle = document.getElementById('modalDetalle')
    modalDetalle.style.display = "none";
  });
});

