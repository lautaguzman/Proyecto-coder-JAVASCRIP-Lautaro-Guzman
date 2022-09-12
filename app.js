alert("Bienvenido a la tienda oficial del mundial")


const camisetas = [
    { nombre: "camiseta titular de argentina", precio: 16000 },
    { nombre: "camiseta suplente de argentina", precio: 12000 },
    { nombre: "camiseta titular de brasil", precio: 15000 },
    { nombre: "camiseta titular de portugal", precio: 14000 },

];

let carrito = []

let selecciona = prompt("desea adquirir alguna camiseta si o no ")

while (selecciona != "si" && selecciona != "no") {
    alert("ingrese si o no")
    selecciona = prompt("indica por si o no")

}

if (selecciona == "si") {
    alert("lista de camisetas en stock")
    let todasLasCamisetas = camisetas.map((camisetas) => camisetas.nombre + "" + camisetas.precio + "$");
    alert(todasLasCamisetas.join(" - "))
} else if (selecciona == "no") {
    alert("gracias por su visita!")
}

while (selecciona != "no") {
    let camisetas = prompt("agrega una camiseta al carrito")
    let precio = 0


    if (camisetas == "camiseta titular de argentina" ||
        camisetas == "camiseta suplente de argentina" ||
        camisetas == "camiseta titular de brasil" ||
        camisetas == "camiseta titular de portugal") {
        switch (camisetas) {
            case "camiseta titular de argentina":

                precio = 16000

                break;

            case "camiseta suplente de argentina":

                precio = 12000

                break;
            case "camiseta titular de brasil":

                precio = 15000

                break;

            case "camiseta titular de portugal":

                precio = 14000

                break;

            default:
                break;
        }
        let unidades = parseInt(prompt("cuantas camisetas desea comprar"))

        carrito.push({ camisetas, unidades, precio })

        console.log(carrito)
    } else {
        alert("camiseta no disponible por el momento")
    }

    selecciona = prompt("¿quiere agregar otra camiseta?")


    while (selecciona === "no") {
        alert("gracias por su compra, vuelva pronto")

        carrito.forEach((carritoFinal) => {
            alert(`camisetas: ${carritoFinal.camisetas}, unidad: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}


const compra = carrito.reduce((acc, elem) => acc + elem.precio * elem.unidades, 0)
alert(`el total de su compra es ${compra}`)

































