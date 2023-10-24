/*
* 
* Dado el index.html el cual NO SE PUEDE MODIFICAR crea un archivo javascript 
* con la siguiente funcionalidad:
* Al hacer click sobre el boton "Descender a Segunda División"
* el primer equipo de la lista de Primera División deberá pasar al final  
* la lista de Segunda División.
* 
* Para la lista de segunda división se realizará la misma operación pero pasando
* los equipos a la lista de Primera División. 
* 
* Ya sea haciendo clic en el botón "Descender a Segunda División" como haciendo clic
* en el botón de "Ascender a Primera División" si no hay equipos en la lista para
* ascender o descender deberá saltar un Alert que diga "NO HAY MÁS EQUIPOS". 
* 
* Ayuda: El primer hijo de cualquier elemento del DOM es la propiedad 
* firstElementChild de dicho elemento.
*/

{

    let inicio = function () {
        //Recupero boton descender
        const botonDescender = document.getElementById("btnasc");
        //Recupero boton ascender
        const botonAscender = document.getElementById("btndesc");
        //Recupero primeraLista
        const primeraLista = document.getElementById("ulprimera");
        //Recupero segundaLista
        const segundaLista = document.getElementById("ulsegunda");


        let descender = function () {
            //Obtengo primer elemento de la lista que es el primer li
            let equipoPrimerDivision
                = primeraLista.firstElementChild;
            //paso este li a la segunda lista
            primeraLista.firstElementChild ? segundaLista.appendChild(equipoPrimerDivision
            ) : alert("No hay más equipos");

        }


        let ascender = function () {
            let equipoSegundaDivision
                = segundaLista.firstElementChild;
            segundaLista.firstElementChild ? primeraLista.appendChild(equipoSegundaDivision
            ) : alert("No hay más equipos");

        }

        botonDescender.addEventListener("click", descender);
        botonAscender.addEventListener("click", ascender);
    }

    document.addEventListener("DOMContentLoaded", inicio);
}