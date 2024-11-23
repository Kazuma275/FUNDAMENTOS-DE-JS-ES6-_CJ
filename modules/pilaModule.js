"use strict";

import { renderizarCesta } from "../utils/domHelpers.js";

// Inicialización de variables
const CESTA_COLADA = [];
const LIMITE = 10;
const PRENDAS = ["Sandalia", "Collar de cuentas", "Abanico", "Camisa", "Pantalón", "Calcetines", "Toalla", "Vestido", "Jersey", "Zapato"];

// Función para agregar una prenda aleatoria a la cesta
export function agregarPrenda() {
    if (CESTA_COLADA.length >= LIMITE) {
        document.getElementById('mensajeColada').textContent = "DEBERÍAS EMPEZAR A LAVAR LA ROPA";
    } else {
        const prendaAleatoria = PRENDAS[Math.floor(Math.random() * PRENDAS.length)];
        CESTA_COLADA.push(prendaAleatoria);
        document.getElementById('mensajeColada').textContent = `Prenda añadida a la cesta: ${prendaAleatoria}`;
        renderizarCesta(CESTA_COLADA);
    }
}

// Función para sacar la última prenda de la cesta
export function sacarPrenda() {
    if (CESTA_COLADA.length === 0) {
        document.getElementById('mensajeColada').textContent = "NO HAY MÁS ROPA QUE LAVAR";
    } else {
        const prenda = CESTA_COLADA.pop();
        document.getElementById('mensajeColada').textContent = `LA SIGUIENTE PRENDA A LAVAR ES: ${prenda}`;
        renderizarCesta(CESTA_COLADA);
    }
}

// Renderiza la cesta inicial (vacía)
renderizarCesta(CESTA_COLADA);
