{

    let inicio = function () {
        //Creo boton
        const boton = document.createElement("input");
        boton.type = "button";
        boton.value = "Añadir";
        //Creo ul
        const ul = document.createElement("ul");
        //añadir boton y ul al dom
        document.body.appendChild(ul);
        document.body.appendChild(boton);




        let añadir = function () {
            //Creo li
            const li = document.createElement("li");
            //creo texto
            li.textContent = prompt("Inserte un texto");
            //agrego li a ul
            ul.appendChild(li);
            console.log("Ejecutando función añadir");
        }

        boton.addEventListener("click", añadir);

    }

    document.addEventListener("DOMContentLoaded", inicio);

}