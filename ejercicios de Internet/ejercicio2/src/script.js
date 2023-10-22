{
    let inicio = function () {
        const formulario = document.createElement("form");
        const labelEuros = document.createElement("label");
        labelEuros.textContent = "Euros: ";
        const inputEuros = document.createElement("input");
        inputEuros.type = "number";


        const labelDolares = document.createElement("label");
        labelDolares.textContent = "Dólares: ";
        const inputDolares = document.createElement("input");
        inputDolares.type = "number";


        document.body.appendChild(formulario);
        formulario.appendChild(labelEuros);
        labelEuros.appendChild(inputEuros);

        formulario.appendChild(labelDolares);
        labelDolares.appendChild(inputDolares);

        const boton = document.createElement("input");
        boton.type = "button";
        boton.value = "Calcular";
        document.body.appendChild(boton);

        let convertir = function () {
            const valorDolar = 2;
            let valorConvertido = inputEuros.value * valorDolar;

            inputEuros.value ? inputDolares.value = valorConvertido :
                alert("Debe insertar una cantidad en la casilla Euros");
            console.log("Ejecutando función convertir");


        }

        boton.addEventListener("click", convertir);

    }

    document.addEventListener("DOMContentLoaded", inicio);
}