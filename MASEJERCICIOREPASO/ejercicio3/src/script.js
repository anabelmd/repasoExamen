// {

//     document.addEventListener("DOMContentLoaded", function () {
//         //Recupero elementos
//         const boton = document.getElementsByTagName("input");
//         const ul = document.getElementsByTagName("ul");

//         function añadir() {
//             const li = document.createElement("li");
//             li.textContent = prompt("Inserte algo en la lista");
//             ul[0].appendChild(li);
//         };

//         boton[0].addEventListener("click", añadir);

//     });


// }

{
    let inicio = function () {
        const boton = document.getElementsByTagName("input");
        const ul = document.getElementsByTagName("ul");


        let añadir = function () {
            const li = document.createElement("li");
            li.textContent = prompt("Inserte algo en la lista");
            ul[0].appendChild(li);

        }

        boton[0].addEventListener("click", añadir);
    }

    document.addEventListener("DOMContentLoaded", inicio);
}