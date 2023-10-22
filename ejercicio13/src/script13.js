{
    //Si inicio es una variable a la que le asigno una función,
    //no puedo llamar arriba a document.addEven....("Dom...inicio")
    //Dará error porque la variable inicio se ha declarado más abajo.

    //Sin embargo, si en lugar de hacerlo así, creo la función inicio, 
    //a las funciones sí las puedo llamar antes de crearlas,
    //por lo tanto la línea document.Even...(Dom...,inicio) si
    //la puedo poner arriba.

    //En conclusión, a las variables las tengo que llamar una vez se han
    //creado y las funciones no importa donde las cree.


    let inicio = function () {
        //capturo input
        const boton = document.getElementsByTagName("input");
        //Capturo ul
        const ul = document.getElementById("lista");



        let añade = function () {
            //creo li
            const li = document.createElement("li");
            li.textContent = "Nuevo texto";
            ul.appendChild(li);
            console.log("La función añade se está ejecutando");
        }

        boton[0].addEventListener("click", añade);
    }


    document.addEventListener("DOMContentLoaded", inicio);


}