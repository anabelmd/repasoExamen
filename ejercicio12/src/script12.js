{


    let inicio = function () {
        const enlace = document.getElementById("enlace");
        let span = document.getElementById("adicional");



        let mostrar = function () {
            span.className = "visible";
            enlace.className = "oculto";
            console.log("Función mostrar ejecutando");
        }

        enlace.addEventListener("click", mostrar);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}