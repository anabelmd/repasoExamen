{
    let inicio = function () {

        //recupero elementos

        const inputs = document.getElementsByTagName("input");
        const botonCalcular = inputs[4];

        let calculateCost = function () {
            let costeHotel = calculateHotelCost(inputs[0].value);
            inputs[1].value = costeHotel;
            let costeAlquilerCoche = calculateRentingCarCost(inputs[0].value);
            inputs[2].value = costeAlquilerCoche;
            let costeTotal = costeHotel + costeAlquilerCoche;
            inputs[3].value = costeTotal;
            console.log("Ejecutando función calculateCost");

        }

        let calculateHotelCost = function (numeroNoches) {
            let total = numeroNoches * 140;
            return total;
        }

        let calculateRentingCarCost = function (numeroNoches) {
            let diaAlquiler = 40;
            let total = numeroNoches * diaAlquiler;
            return total;
        }


        botonCalcular.addEventListener("click", calculateCost);
    }

    document.addEventListener("DOMContentLoaded", inicio);


}