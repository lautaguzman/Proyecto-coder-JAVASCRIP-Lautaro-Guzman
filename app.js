const stock = document.getElementById("productos");

const listaCamisetas = [
  {
    id: 1,
    nombre: "Camiseta de Argentina",
    precio: 20000,
    img: "",
  },

  {
    id: 2,
    nombre: "Camiseta de Alemania",
    precio: 15000,
  },

  {
    id: 3,
    nombre: "Camiseta de Belgica",
    precio: 16000,
  },
  {
    id: 4,
    nombre: "Camiseta de Brasil",
    precio: 20000,
  },
  {
    id: 5,
    nombre: "Camiseta de Eecuador",
    precio: 12000,
  },
  {
    id: 6,
    nombre: "Camiseta de Espania",
    precio: 16000,
  },
  {
    id: 7,
    nombre: "Camiseta de Ghana",
    precio: 10000,
  },
  {
    id: 8,
    nombre: "Camiseta de Inglaterra",
    precio: 13000,
  },
  {
    id: 9,
    nombre: "Camiseta de Japon",
    precio: 13000,
  },
  {
    id: 10,
    nombre: "Camiseta de Marruecos",
    precio: 8000,
  },
  {
    id: 11,
    nombre: "Camiseta de Mexico",
    precio: 9000,
  },
  {
    id: 12,
    nombre: "Camiseta de Senegal",
    precio: 8000,
  },
  {
    id: 13,
    nombre: "Camiseta de Serbia",
    precio: 10000,
  },
  {
    id: 14,
    nombre: "Camiseta de Suiza",
    precio: 9000,
    img: "",
  },
  {
    id: 15,
    nombre: "Camiseta de Uruguay",
    precio: 13000,
  },
];

let carrito = [];

listaCamisetas.forEach((camisetas) => {
  let content = document.createElement("div");
  content.innerHTML = `
  <div class="col-6"> 
  <img src="${camisetas.img}">
  <h3>${camisetas.nombre}</h3>
  <p>${camisetas.precio}$</p>
  </div>
  `;
  const botonComprar = document.createElement("button");
  botonComprar.innerText = "Comprar";
  content.append(botonComprar);

  stock.append(content);
});
