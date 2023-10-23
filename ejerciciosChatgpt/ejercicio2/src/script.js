// {

//     let inicio = function () {
//         //Recupero elementos
//         const botonAñadir = document.getElementById("addTask");
//         const tabla = document.getElementById("taskTable");
//         let input = document.getElementById("taskInput");



//         let añadir = function () {
//             //creo fila
//             const tr = document.createElement("tr");
//             //se la añado a la tabla
//             tabla.appendChild(tr);
//             //Creo columnas
//             const td1 = document.createElement("td");
//             td1.id = "columna1";
//             //Se la añado a la fila
//             tr.appendChild(td1);
//             td1.textContent = input.value;
//             input.value = null;

//             const td2 = document.createElement("td");
//             td2.id = "columna2";
//             tr.appendChild(td2);

//             //Creo boton eliminar para cada fila 
//             const botonEliminar = document.createElement("input");
//             botonEliminar.type = "button";
//             botonEliminar.value = "Eliminar";
//             //lo añado a la segunda columna
//             td2.appendChild(botonEliminar);

//             let eliminar = function () {
//                 tabla.removeChild(tr);
//             }

//             botonEliminar.addEventListener("click", eliminar);

//         }

//         botonAñadir.addEventListener("click", añadir);
//     }

//     document.addEventListener("DOMContentLoaded", inicio);

// }


{
    document.addEventListener("DOMContentLoaded", inicio);

    function inicio() {
        const botonAñadir = document.getElementById("addTask");
        const tabla = document.getElementById("taskTable");
        let input = document.getElementById("taskInput");


        function añadir() {
            const tr = document.createElement("tr");
            //se la añado a la tabla
            tabla.appendChild(tr);
            //Creo columnas
            const td1 = document.createElement("td");
            td1.id = "columna1";
            //Se la añado a la fila
            tr.appendChild(td1);
            td1.textContent = input.value;
            input.value = null;

            const td2 = document.createElement("td");
            td2.id = "columna2";
            tr.appendChild(td2);

            //Creo boton eliminar para cada fila 
            const botonEliminar = document.createElement("input");
            botonEliminar.type = "button";
            botonEliminar.value = "Eliminar";
            //lo añado a la segunda columna
            td2.appendChild(botonEliminar);

            function eliminar() {
                tabla.removeChild(tr);
            }
            botonEliminar.addEventListener("click", eliminar);

        }

        botonAñadir.addEventListener("click", añadir);

    }
}