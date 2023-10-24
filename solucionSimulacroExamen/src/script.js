/*************************************************************************
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
 *
 *******************************************************************************/

{
    let iniciar = function () {
        const listaPrimera = document.getElementById("ulprimera");
        const listaSegunda = document.getElementById("ulsegunda");
        const btnAscender = document.getElementById("btnasc");
        const btnDescender = document.getElementById("btndesc");
        btnAscender.addEventListener("click", ascender);
        btnDescender.addEventListener("click", descender);

        function ascender() {
            if (listaPrimera.firstElementChild) {

                let elemento = document.createElement("li");
                elemento.setAttribute("class", "list-group-item");
                elemento.textContent = listaPrimera.firstElementChild.textContent;
                listaPrimera.firstElementChild.remove();
                listaSegunda.appendChild(elemento);
            } else { alert("😩¡QUE NO HAY MÁS EQUIPOS DE PRIMERA!"); }
        };

        function descender() {
            if (listaSegunda.firstElementChild) {

                let elemento = document.createElement("li");
                elemento.setAttribute("class", "list-group-item");
                elemento.textContent = listaSegunda.firstElementChild.textContent;
                listaSegunda.firstElementChild.remove();
                listaPrimera.appendChild(elemento);
            } else { alert("😩¡QUE NO HAY MÁS EQUIPOS DE SEGUNDA!"); }
        };
    }
    document.addEventListener("DOMContentLoaded", iniciar);
}
