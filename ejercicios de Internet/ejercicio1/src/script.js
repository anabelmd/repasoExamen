{

    let inicio = function () {
        //recupero inputs
        const input = document.getElementsByTagName("input");
        const boton = input[2];

        const parrafo = document.createElement("p");
        document.body.appendChild(parrafo);

        let enviarDatos = function () {
            input[0].value && input[1].value ? parrafo.textContent = "Hola " + input[0].value
                + " " + input[1].value + ", gracias por rellenar el formulario." : alert("Faltan datos por introducir");
            console.log("Ejecutando función enviarDatos");
        }

        boton.addEventListener("click", enviarDatos);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}