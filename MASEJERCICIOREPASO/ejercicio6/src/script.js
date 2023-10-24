{

    let inicio = function () {
        //Recupero elementos
        const botonDescender = document.getElementById("btnasc");
        const botonAscender = document.getElementById("btndesc");
        const primeraLista = document.getElementById("ulprimera");
        const segundaLista = document.getElementById("ulsegunda");


        let descender = function () {
            //Recupero contenido primerElemento
            let primerElemento = primeraLista.firstElementChild;
            //creo li
            const li = document.createElement("li");
            li.className = "list-group-item";
            //agrego li a segunda lista

            if (primerElemento) {
                li.textContent = primerElemento.textContent;
                segundaLista.appendChild(li);
                primeraLista.removeChild(primerElemento);
            } else
                alert("No hay más equipos en la lista");

        }

        let ascender = function () {
            // //creo li
            // const li = document.createElement("li");
            // //Recupero primer elemento
            // const primerElemento = segundaLista.firstElementChild;
            // li.className = "list-group-item";

            // if (primerElemento) {
            //     li.textContent = primerElemento.textContent;
            //     primeraLista.appendChild(li);
            //     segundaLista.removeChild(primerElemento);
            // } else
            //     alert("No hay más equipos en la lista");

            //VERSION CORTA
            //Recupero primer elemento
            const primerElemento = segundaLista.firstElementChild;
            primerElemento ? primeraLista.appendChild(primerElemento) :
                alert("No hay más equipos en la lista");
        }


        botonDescender.addEventListener("click", descender);
        botonAscender.addEventListener("click", ascender);
    }

    document.addEventListener("DOMContentLoaded", inicio);

}