const stock = document.getElementById("productos");

const verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modal-container");

const listaCamisetas = [
  {
    id: 1,
    nombre: "Argentina",
    precio: 20000,
    img: "imagenes/argentina/argentina titular.jpg",
    cantidad: 1,
  },

  {
    id: 2,
    nombre: "Alemania",
    precio: 15000,
    img: "imagenes/alemania/alemania titular.jpg",
    cantidad: 1,
  },

  {
    id: 3,
    nombre: "Belgica",
    precio: 16000,
    img: "imagenes/belgica/belgica titular.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Brasil",
    precio: 20000,
    img: "imagenes/brasil/brasil titular.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Ecuador",
    precio: 12000,
    img: "imagenes/ecuador/ecuador titular.jpg",
    cantidad: 1,
  },
  {
    id: 15,
    nombre: "Uruguay",
    precio: 13000,
    img: "imagenes/uruguay/uruguay titular.jpg",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Ghana",
    precio: 10000,
    img: "imagenes/ghana/ghana titular.jpg",
    cantidad: 1,
  },
  {
    id: 11,
    nombre: "Mexico",
    precio: 9000,
    img: "imagenes/mexico/mexico titular.jpg",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Japon",
    precio: 13000,
    img: "imagenes/japon/japon titular.jpg",
    cantidad: 1,
  },

  {
    id: 6,
    nombre: "Espania",
    precio: 16000,
    img: "imagenes/españa/españa titular.jpg",
    cantidad: 1,
  },

  {
    id: 10,
    nombre: "Marruecos",
    precio: 8000,
    img: "imagenes/marruecos/marruecos titular.jpg",
    cantidad: 1,
  },
  {
    id: 12,
    nombre: "Senegal",
    precio: 8000,
    img: "imagenes/senegal/senegal titular.jpg",
    cantidad: 1,
  },

  /* {
      id: 8,
      nombre: "Inglaterra",
      precio: 13000,
      img: "imagenes/inglaterra/inglaterra titular.jpg",cantidad: 1,
    },
     
      {
        id: 13,
        nombre: "Camiseta de Serbia",
        precio: 10000,
        img: "imagenes/serbia/serbia titular.jpg",cantidad: 1,
      },
      {
        id: 14,
        nombre: "Camiseta de Suiza",
        precio: 9000,
        img: "imagenes/suiza/suiza titular.jpg",cantidad: 1,
      },*/
];

let carrito = [];

listaCamisetas.forEach((camisetas) => {
  let content = document.createElement("div");
  content.className = "tarjeta";
  content.innerHTML = ` 
  <div class="card text-white bg-primary mb-3" style="width: 18rem;">
  <img src="${camisetas.img}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title text-capitalize fst-italic text-decoration-underline">${camisetas.nombre}</h5>
    <p class="card-text  fw-bold fs-4">${camisetas.precio}$</p>
  </div>
</div> `;

  stock.append(content);

  const botonComprar = document.createElement("button");
  botonComprar.className = "btn btn-primary";
  botonComprar.innerText = "Agregar al carrito";

  content.append(botonComprar);

  botonComprar.addEventListener("click", () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });
    const repetir = carrito.some(
      (repeatProduct) => repeatProduct.id === camisetas.id
    );
    if (repetir) {
      carrito.map((prod) => {
        if (prod.id === camisetas.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: camisetas.id,
        nombre: camisetas.nombre,
        precio: camisetas.precio,
        img: camisetas.img,
        cantidad: camisetas.cantidad,
      });
    }
    console.log(carrito);
  });
});
