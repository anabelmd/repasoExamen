{

    let inicio = function () {
        //Capturo boton
        const boton = document.getElementById("button-addon2");
        //Capturo ol
        const ol = document.getElementsByTagName("ol");
        //Capturo input
        let input = document.getElementsByTagName("input");

        //Recupero todos los li para borrar
        const li = document.getElementsByTagName("li");

        //boton borrar
        const botonBorrar = document.createElement("input");
        botonBorrar.type = "button";
        botonBorrar.value = "Borrar";
        document.body.appendChild(botonBorrar);


        let agregar = function () {
            //Creo li
            const li = document.createElement("li");
            li.className = "list-group-item";
            //agrego valor del input al li
            let nombreEquipo = input[0].value;
            li.textContent = nombreEquipo;
            //agrego li a ol
            ol[0].appendChild(li);
            input[0].value = "";
            console.log("Ejecutando función agregar");
        };

        let borrar = function () {
            while (ol[0].firstChild) {
                ol[0].removeChild(ol[0].firstChild);
            }
        };

        boton.addEventListener("click", agregar);
        botonBorrar.addEventListener("click", borrar);
    };

    document.addEventListener("DOMContentLoaded", inicio);

}