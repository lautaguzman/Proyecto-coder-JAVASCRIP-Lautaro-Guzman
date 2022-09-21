const stock = document.getElementById("productos");


let carrito = [];

listaCamisetas.forEach((camisetas) => {
  let content = document.createElement("div");
  content.className = "tarjeta";
  content.innerHTML = `
  <div class=""> 
  <img src="${camisetas.img}">
  <h3>${camisetas.nombre}</h3>
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
