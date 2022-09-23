const listaCamisetas = [
  {
    id: 1,
    nombre: "Camiseta de Argentina",
    precio: 20000,
    img: "imagenes/argentina/argentina titular.jpg",
  },

  {
    id: 2,
    nombre: "Camiseta de Alemania",
    precio: 15000,
    img: "imagenes/alemania/alemania titular.jpg",
  },

  {
    id: 3,
    nombre: "Camiseta de Belgica",
    precio: 16000,
    img: "imagenes/belgica/belgica titular.jpg",
  },
  {
    id: 4,
    nombre: "Camiseta de Brasil",
    precio: 20000,
    img: "imagenes/brasil/brasil titular.jpg",
  },
  {
    id: 5,
    nombre: "Camiseta de Ecuador",
    precio: 12000,
    img: "imagenes/ecuador/ecuador titular.jpg",
  },
  {
    id: 6,
    nombre: "Camiseta de Espania",
    precio: 16000,
    img: "imagenes/españa/españa titular.jpg",
  },
  /*{
      id: 7,
      nombre: "Camiseta de Ghana",
      precio: 10000,
      img: "imagenes/ghana/ghana titular.jpg",
    },
    {
      id: 8,
      nombre: "Camiseta de Inglaterra",
      precio: 13000,
      img: "imagenes/inglaterra/inglaterra titular.jpg",
    },
    {
      id: 9,
      nombre: "Camiseta de Japon",
      precio: 13000,
      img: "imagenes/japon/japon titular.jpg",
    },
    {
      id: 10,
      nombre: "Camiseta de Marruecos",
      precio: 8000,
      img: "imagenes/marruecos/marruecos titular.jpg",
    },
    {
      id: 11,
      nombre: "Camiseta de Mexico",
      precio: 9000,
      img: "imagenes/mexico/mexico titular.jpg",
    },
    {
      id: 12,
      nombre: "Camiseta de Senegal",
      precio: 8000,
      img: "imagenes/senegal/senegal titular.jpg",
    },
    {
      id: 13,
      nombre: "Camiseta de Serbia",
      precio: 10000,
      img: "imagenes/serbia/serbia titular.jpg",
    },
    {
      id: 14,
      nombre: "Camiseta de Suiza",
      precio: 9000,
      img: "imagenes/suiza/suiza titular.jpg",
    },
    {
      id: 15,
      nombre: "Camiseta de Uruguay",
      precio: 13000,
      img: "imagenes/uruguay/uruguay titular.jpg",
    },*/
];

const aJSON = JSON.stringify(listaCamisetas);

localStorage.setItem("camiseta", aJSON);

localStorage.getItem("camiseta");

console.log(JSON.parse(aJSON));
  