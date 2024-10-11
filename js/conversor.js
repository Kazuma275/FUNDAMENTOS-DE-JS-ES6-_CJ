"use strict";

// Conversión de bases
function convertir() {
    const numero = document.getElementById('numero').value;
    const base = document.getElementById('base').value;
    let resultado;

    // Conversión a la base seleccionada
    if (base === "2") {
        resultado = parseInt(numero).toString(2);
    } else if (base === "8") {
        resultado = parseInt(numero).toString(8);
    } else if (base === "10") {
        resultado = parseInt(numero).toString(10);
    } else if (base === "16") {
        resultado = parseInt(numero).toString(16);
    } else {
        resultado = "Base no válida";
    }
    
    document.getElementById('resultadoConversion').textContent = 'Resultado de conversión: ' + resultado;
}
