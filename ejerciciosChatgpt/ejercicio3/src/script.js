{
    let inicio = function () {
        const cinema = document.getElementById("cinema");
        let reservados = 0;

        let contadorId = 0;
        for (let i = 0; i < 50; i++) {
            //creo asiento

            const asiento = document.createElement("div");
            asiento.className = "seat";
            asiento.id = contadorId;
            cinema.appendChild(asiento);
            contadorId++;


            if (Math.random() < 0.2 || (i > 40 && reservados < 10)) {
                asiento.className += " reserved";
                reservados++;
            }
        }

        let cambiarAparienciaAsiento = function (contadorId) {
            //recupero asientos (son div)

            for (let i = 0; i < div; i++) {
                const div = document.getElementsByTagName("div");
                if (div[i].id == contadorId) {
                    div[i].style.backgroundColor = "blue";
                }
            }

            div.addEventListener("click", cambiarAparienciaAsiento);
        }

    }


    document.addEventListener("DOMContentLoaded", inicio);
}

