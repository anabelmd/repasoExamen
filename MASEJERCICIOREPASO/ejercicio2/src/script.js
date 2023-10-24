// {
//     document.addEventListener("DOMContentLoaded", function () {

//         //Recupero enlace
//         const enlace = document.getElementById("enlace");
//         //Recupero span
//         const span = document.getElementById("adicional");

//         function mostrar() {
//             span.className = "visible";

//         };

//         function ocultar() {
//             enlace.className = "oculto";

//         }


//         enlace.addEventListener("click", mostrar);
//         enlace.addEventListener("dblclick", ocultar);

//     });

// }

{

    let inicio = function () {
        const enlace = document.getElementById("enlace");
        const span = document.getElementById("adicional");


        let mostrar = function () {
            span.className = "visible";

        }

        let ocultar = function () {
            enlace.className = "oculto";
        }

        enlace.addEventListener("click", mostrar);
        enlace.addEventListener("dblclick", ocultar);


    }

    document.addEventListener("DOMContentLoaded", inicio);

}