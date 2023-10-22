{
    //1. Número de enlaces de la página

    //Recupero los enlaces
    const enlaces = document.getElementsByTagName("a");
    const numeroEnlaces = enlaces.length;
    console.log(`El número de enlaces es de ${numeroEnlaces}`);

    //2.Dirección a la que enlaza el penúltimo enlace
    const penultimoEnlace = enlaces[enlaces.length - 2];
    const direccionEnlace = penultimoEnlace.href;
    console.log(`La dirección del penúltimo enlace: ${direccionEnlace}`);

    //3. Numero de enlaces que enlazan a http://prueba

    let contador = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "http://prueba/") {
            contador++;
        }
    }
    console.log(`Hay ${contador} de enlaces que apunta a  http://prueba`);

    //4. Número de enlaces del tercer párrafo

    //Recupero párrafos
    const parrafos = document.getElementsByTagName("p");

    //Recupero enlaces del tercero
    const enlacesParrafo = parrafos[2].getElementsByTagName("a");
    const numeroEnlacesTercerParrafo = enlacesParrafo.length;
    console.log(`El tercer párrafo tiene ${numeroEnlacesTercerParrafo} enlaces`);
}