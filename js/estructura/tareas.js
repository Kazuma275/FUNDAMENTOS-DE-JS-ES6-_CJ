"use strict";

/* ESTE ES EL JAVASCRIPT PRINCIPAL DE TAREAS, MODULARIZADO */

// Importación de los módulos necesarios
import Lista from "../../classes/Lista.js";

// Crear una instancia de la clase Lista
const lista = new Lista();

// Vincular los eventos con los botones
document.getElementById('añadirTarea').addEventListener('click', () => {
  lista.anado();  // Añadir tarea sin prioridad
});

document.getElementById('eliminarTarea').addEventListener('click', () => {
  lista.elimino();  // Eliminar tarea sin prioridad
});

document.getElementById('añadirPrioridad').addEventListener('click', () => {
  lista.anadoPrior();  // Añadir tarea con prioridad
});

document.getElementById('eliminarPrioridad').addEventListener('click', () => {
  lista.eliminoPrior();  // Eliminar tarea con prioridad
});
