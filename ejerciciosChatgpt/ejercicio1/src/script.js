{

    let inicio = function () {
        //recupero elementos
        const boton = document.getElementById("addBook");
        const lista = document.getElementById("bookList");
        const input = document.getElementById("bookInput");


        let añadirLibro = function () {
            const li = document.createElement("li");
            input.value ? li.textContent = input.value :
                alert("Por favor, ingrese un nombre de libro.");
            lista.appendChild(li);
            input.value = null;

            const botonEliminar = document.createElement("input");
            botonEliminar.type = "button";
            botonEliminar.value = "Eliminar";
            li.appendChild(botonEliminar);

            //la funcion eliminar libro debe crearse dentro
            //de la de añadirLibro para que pueda tener acceso
            //al elemento li para poder borrarlo
            let eliminarLibro = function () {
                lista.removeChild(li);
            }


            botonEliminar.addEventListener("click", eliminarLibro);
        }



        boton.addEventListener("click", añadirLibro);
    }


    document.addEventListener("DOMContentLoaded", inicio);

}