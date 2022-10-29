const formulario = document.getElementById(`form`)
formulario.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const nombre = document.getElementById(`name-form`).value;
    const apellido = document.getElementById(`apellido-form`).value
    const mail = document.getElementById(`email-form`).value
    const direccion = document.getElementById(`inputAddress-form`).value
    const ciudad = document.getElementById(`ciudad-form`).value
    const provincia = document.getElementById(`provincia-form`).value
    console.log(nombre, apellido, mail, direccion, ciudad, provincia)
})

const botonEnviar = document.getElementById(`btnEnviar`)
botonEnviar.addEventListener(`click`, () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Muchas Gracias por su compra",
        showConfirmButton: false,
        timer: 1500,
    });
})