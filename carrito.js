const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-titulo">Tu Compra</h1>
    
    `;

  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "";
  modalButton.className = "btn-close btn-close-white aria-label=Close";

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
      <p>$${camisetas.precio}</p>
      <p>cantidad: ${camisetas.cantidad}</p>
      <p>total: ${camisetas.cantidad * camisetas.precio}</p>`;

    modalContainer.append(carritoContent);

    let eliminar = document.createElement("span");
    eliminar.innerText = "x";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", quitarProducto);
  });
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalTodo = document.createElement("div");
  totalTodo.className = "total-content";
  totalTodo.innerHTML = `total hasta el momento$${total}`;
  modalContainer.append(totalTodo);
};
verCarrito.addEventListener("click", pintarCarrito);

const quitarProducto = () => {
  const founId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== founId;
  });
  pintarCarrito();
};
