{ 
    let iniciar = function() {
        //Recupera botones
        const boton = document.getElementsByTagName("button");
        //Recupera input
        const input = document.getElementsByTagName("input");
        //Recupera ul
        const listaEquiposFutbol = document.getElementsByTagName("ul");   

        boton[0].addEventListener("click", introducirEquipo);
        boton[0].addEventListener("dblclick", eliminarClick);
    
        function introducirEquipo() {
            //Crea elemento li
            const nodo = document.createElement("li");
            //Le da una clase al elemento
            nodo.className = "list-group-item";
            /*
            Pregunta si el input tiene valor, al elemento li le da el valor
            del valor del input, luego a ul le agrega el elemento li. Y si el input
            no tiene valor, salta un mensaje de alerta.
            */ 
            input[0].value ? (nodo.textContent = input[0].value, listaEquiposFutbol[0].appendChild(nodo)) : alert("Escriba un equipo para agregarlo a la lista");
            console.log(`Disparo click`);
        }
        function eliminarClick(){
            boton[0].removeEventListener("click",introducirEquipo);
            console.log("Eliminado click");
        }
    }
    document.addEventListener("DOMContentLoaded",iniciar);
}