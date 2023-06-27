const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h1 class=" modal-header-titulo text-capitalize">tu compra</h1> `;

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
      <button class="resta">-</button>
      <p>cantidad: ${camisetas.cantidad}</p>
      <button class="sumar">+</button>
      <p>total: ${camisetas.cantidad * camisetas.precio}</p>
      <button class="delete-product">❌</button>`;

    modalContainer.append(carritoContent);


    let resta = carritoContent.querySelector(".resta")


    resta.addEventListener("click", () => {
      if (camisetas.cantidad !== 1) {
        camisetas.cantidad--;
      }
      local();
      pintarCarrito();
    });


    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () => {
      camisetas.cantidad++;
      local();
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product")
    eliminar.addEventListener("click", () => {
      quitarProducto(camisetas.id);
    });

  });
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalTodo = document.createElement("div");
  totalTodo.className =
    "p-3 mb-2 bg-info text-dark text-capitalize fw-bold font-monospace";
  totalTodo.innerHTML = `total hasta el momento$${total}`;
  modalContainer.append(totalTodo);
};

verCarrito.addEventListener("click", pintarCarrito);

const quitarProducto = (id) => {
  const founId = carrito.find((element) => element.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== founId;
  });
  pintarCarrito();
  local();
};

