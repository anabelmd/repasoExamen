{

    let inicio = function () {
        //Recupero elementos
        const boton = document.getElementById("button-addon2");
        const ul = document.getElementsByTagName("ul");
        const input = document.getElementsByTagName("input");
        const botonBorrar = document.createElement("input");
        botonBorrar.type = "button";
        botonBorrar.value = "Eliminar";
        botonBorrar.className = "btn btn-outline-secondary";
        document.body.appendChild(botonBorrar);


        let agregar = function () {
            //Creo li
            const li = document.createElement("li");
            li.className = "list-group-item";
            ul[0].appendChild(li);
            let valorInput = input[0].value;
            if (valorInput) {
                li.textContent = valorInput;

            } else {
                alert("Inserte un equipo");
            }

            input[0].value = null;

        }

        let borrar = function () {
            while (ul[0].firstElementChild) {
                ul[0].removeChild(ul[0].firstElementChild);
            }
        }

        boton.addEventListener("click", agregar);
        botonBorrar.addEventListener("click", borrar);


    };

    document.addEventListener("DOMContentLoaded", inicio);
}