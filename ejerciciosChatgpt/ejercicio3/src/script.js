{
    let inicio = function () {
        const cinema = document.getElementById("cinema");
        let reservados = 0;


        for (let i = 0; i < 50; i++) {
            //creo asiento
            let asiento = document.createElement("div");
            asiento.className = "seat";
            asiento.id = "idAsiento";
            cinema.appendChild(asiento);


            if (Math.random() < 0.2 || (i > 40 && reservados < 10)) {
                asiento.className += " reserved";
                reservados++;
            }
        }

        // let cambiarAparienciaAsiento = function () {
        //     //recupero asiento
        //     let asientoSeleccionado = document.getElementById("idAsiento");
        //     asientoSeleccionado.style.backgroundColor = "blue";

        // }
        // asientoSeleccionado.addEventListener("click", cambiarAparienciaAsiento);


    }

    document.addEventListener("DOMContentLoaded", inicio);
}