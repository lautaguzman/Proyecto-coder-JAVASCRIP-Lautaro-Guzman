const stock = document.getElementById("productos");

const verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modal-container");
let carrito = [];

listaCamisetas.forEach((camisetas) => {
  let content = document.createElement("div");
  content.className = "tarjeta";
  content.innerHTML = `
  <div class=""> 
  <img src="${camisetas.img}">
  <h3>${camisetas.nombre} </h3>
  <p>${camisetas.precio}$</p>
  </div> `;

  stock.append(content);

  const botonComprar = document.createElement("button");
  botonComprar.innerText = "Comprar";

  content.append(botonComprar);

  botonComprar.addEventListener("click", () => {
    carrito.push({
      id: camisetas.id,
      nombre: camisetas.nombre,
      precio: camisetas.precio,
      img: camisetas.img,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  <h1 class="modal-header-titulo">Tu Compra</h1>
  
  `;

  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((camisetas) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${camisetas.img}">
    <h3>${camisetas.nombre} </h3>
    <p>$${camisetas.precio}</p>`;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalTodo = document.createElement("div");
  totalTodo.className = "total-content";
  totalTodo.innerHTML = `total a pagar $${total}`;
  modalContainer.append(totalTodo);
});
