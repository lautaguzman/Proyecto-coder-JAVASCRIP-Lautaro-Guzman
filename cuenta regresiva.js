const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const diaMundial = new Date(`20 noviembre 2022 00:00:00`).getTime();

let interval = setInterval(function () {
  const fechaActual = new Date().getTime();

  let distancia = diaMundial - fechaActual;

  let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  let horas = Math.floor(  (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
 
  let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((distancia % (1000 * 60)) / 1000);




  
}, 1000);

  