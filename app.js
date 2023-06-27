/*const stock = document.getElementById("productos");*/

const verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("stock")) || [];


const productos = document.querySelector("#productos");
fetch("./data.json")
  .then((resp) => resp.json())
  .then((data) => {
    data.forEach((camisetas) => {
      const content = document.createElement("div");
      content.className = "tarjeta";
      content.innerHTML = ` 
    <div class="card text-white bg-primary mb-3" style="width: 18rem;">
    <img src="${camisetas.img}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title text-capitalize fst-italic text-decoration-underline">${camisetas.nombre}</h5>
      <p class="card-text  fw-bold fs-4">${camisetas.precio}$</p>
    </div>
  </div> `;

      productos.append(content);

      const botonComprar = document.createElement("button");
      botonComprar.className = "btn btn-primary";
      botonComprar.innerText = "Agregar al carrito";

      content.append(botonComprar);

      botonComprar.addEventListener("click", () => {
        Swal.fire({
          position: "center",
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
        local();
      });
    });
  });

const local = () => {
  localStorage.setItem("stock", JSON.stringify(carrito))
}

