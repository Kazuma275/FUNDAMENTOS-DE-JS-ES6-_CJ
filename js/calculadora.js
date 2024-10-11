"use strict";

// Mini Calculadora Script
let ultimoResultado = null; // Variable para almacenar el último resultado

function calcular(operacion) {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    let resultado;

    switch (operacion) {
        case '+':
            resultado = operando1 + operando2;
            break;
        case '-':
            resultado = operando1 - operando2;
            break;
        case '*':
            resultado = operando1 * operando2;
            break;
        case '/':
            resultado = operando2 !== 0 ? operando1 / operando2 : 'Error: División por cero';
            break;
        case 'entero':
            if (ultimoResultado !== null) {
                resultado = Math.trunc(ultimoResultado);
            } else {
                resultado = 'Error: No hay resultado previo';
            }
            break;
        case 'decimal':
            if (ultimoResultado !== null) {
                resultado = ultimoResultado - Math.trunc(ultimoResultado);
            } else {
                resultado = 'Error: No hay resultado previo';
            }
            break;
        case '!':
            resultado = factorial(operando1);
            break;
        default:
            resultado = 'Operación no válida';
    }

    if (typeof resultado === 'number') {
        ultimoResultado = resultado;
    }

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function factorial(n) {
    if (n < 0) return 'Error: Número negativo';
    return n === 0 ? 1 : n * factorial(n - 1);
}