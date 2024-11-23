"use strict";
// utils/random.js

export function obtenerTareaAleatoria() {
    const tareasPosibles = ["Ducha", "Cubo", "Cama", "Jabón"];
    return tareasPosibles[Math.floor(Math.random() * tareasPosibles.length)];
}

export function obtenerTareaPrioritariaAleatoria() {
    const tareasPosibles = [
        { tarea: "Ascensor", prioridad: 1 },
        { tarea: "Espejo", prioridad: 2 },
        { tarea: "Inodoro", prioridad: 7 },
        { tarea: "Desatascador", prioridad: 8 }
    ];
    return tareasPosibles[Math.floor(Math.random() * tareasPosibles.length)];
}

/*  Pila  */

// Función para obtener una prenda aleatoria de un array
function obtenerPrendaAleatoria(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

export { obtenerPrendaAleatoria };



/* Lista */

export function obtenerCocheAleatorio() {
    const coches = ["Vagón de tranvía", "Taxi antiguo", "Coche de carreras"];
    return coches[Math.floor(Math.random() * coches.length)];
}

// Función para obtener un elemento aleatorio de un array
export function obtenerElementoAleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
