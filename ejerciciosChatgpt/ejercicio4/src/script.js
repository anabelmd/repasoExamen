{


    let inicio = function () {
        //Recupero elementos
        const boton = document.getElementById("btnAnadir");
        const input = document.getElementById("inputCiudad");
        const lista = document.getElementById("listaItinerario");



        let añadir = function () {
            //Creo li
            const li = document.createElement("li");
            let valorInput = input.value;

            const recuperoLi = document.getElementsByTagName("li")
            let ciudadExistente = false;

            for (let i = 0; i < recuperoLi.length; i++) {
                if (valorInput == recuperoLi[i].textContent) {
                    ciudadExistente = true;
                    break;
                }
            }

            if (!ciudadExistente) {
                li.textContent = valorInput;
                lista.appendChild(li);
                input.value = null;
            } else
                alert("La ciudad ya existe en la lista");




            let eliminar = function () {
                lista.removeChild(li);
            }


            li.addEventListener("click", eliminar);
        }




        boton.addEventListener("click", añadir);




    }
    document.addEventListener("DOMContentLoaded", inicio);
}