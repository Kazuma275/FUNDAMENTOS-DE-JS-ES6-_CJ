"use strict";

import { actualizarLista } from "../utils/domHelpers"; // Importa la función para actualizar el DOM

// Declaración de la cola
const colaTaller = [];
const AFORO_TALLER = 10;

// Función para añadir coches a la cola
export function llega() {
    const mensaje = document.getElementById("mensajeTaller");
    const listaCoches = document.getElementById("listaCoches");
    const coches = ["Vagón de tranvía", "Taxi antiguo", "Coche de carreras"];
    const cocheAleatorio = coches[Math.floor(Math.random() * coches.length)];

    if (colaTaller.length >= AFORO_TALLER) {
        mensaje.textContent = "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
        mensaje.style.color = "#4ECDC4"; // Mensaje en rojo
    } else {
        colaTaller.push(cocheAleatorio);
        mensaje.textContent = `Se añadió un ${cocheAleatorio} a la lista de espera.`;
        mensaje.style.color = "#1A535C"; // Mensaje en azul verdoso oscuro
        actualizarLista(listaCoches);
    }
}

// Función para atender coches en la cola
export function atiendo() {
    const mensaje = document.getElementById("mensajeTaller");
    const listaCoches = document.getElementById("listaCoches");

    if (colaTaller.length === 0) {
        mensaje.textContent = "NO HAY MÁS COCHES QUE REPARAR";
        mensaje.style.color = "#4ECDC4"; // Mensaje en rojo
    } else {
        const cocheAtendido = colaTaller.shift(); // Elimina el primer coche de la cola
        mensaje.textContent = `Se está atendiendo el coche: ${cocheAtendido}.`;
        mensaje.style.color = "#1A535C"; // Mensaje en azul verdoso oscuro
        actualizarLista(listaCoches);
    }
}
