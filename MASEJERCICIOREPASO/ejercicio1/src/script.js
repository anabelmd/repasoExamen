{
    //Número de enlaces de la página
    const enlaces = document.getElementsByTagName("a");
    numeroEnlaces = enlaces.length;
    console.log(`El número de enlaces de la página es de ${numeroEnlaces}`);


    //Dirección del penúltimo enlace
    penultimoEnlace = enlaces[enlaces.length - 2].href;
    console.log(`La dirección del penúltimo enlace apunta a: ${penultimoEnlace}`);

    //Número de enlaces que enlazan a http://prueba
    //Hay que instanciar siempre la variable antes de usarla. IMPORTANTE!!!!!
    let contador = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "http://prueba/") {
            contador++;
        }
    }
    console.log(`Hay ${contador} enlaces que apuntan a http://prueba`);

    //Número de enlaces del tercer párrafo
    const parrafos = document.getElementsByTagName("p");
    const tercerParrafo = parrafos[2];
    const enlacesParrafo = tercerParrafo.getElementsByTagName("a");
    const numeroEnlacesParrafo = enlacesParrafo.length;
    console.log(`El tercer párrafo tiene ${numeroEnlacesParrafo} enlaces`);

}