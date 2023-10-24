// {

//     document.addEventListener("DOMContentLoaded", function () {
//         //Creo elementos
//         const boton = document.createElement("input");
//         boton.type = "button";
//         boton.value = "Añadir elemento";

//         const ul = document.createElement("ul");

//         document.body.appendChild(ul);
//         document.body.appendChild(boton);


//         function añadirElemento() {
//             const li = document.createElement("li");
//             li.textContent = prompt("Inserte elemento");
//             ul.appendChild(li);
//         }

//         boton.addEventListener("click", añadirElemento);
//     });


// }
{

    let inicio = function () {
        const boton = document.createElement("input");
        boton.type = "button";
        boton.value = "Añadir elemento";

        const ul = document.createElement("ul");

        document.body.appendChild(ul);
        document.body.appendChild(boton);

        let añadirElemento = function () {
            const li = document.createElement("li");
            li.textContent = prompt("Inserte elemento");
            ul.appendChild(li);
        }

        boton.addEventListener("click", añadirElemento);

    }

    document.addEventListener("DOMContentLoaded", inicio);
}