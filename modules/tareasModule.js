"use strict";
// ../modules/tareasModule.js
import ListaTareas from '../classes/ListaTareas.js';
import { obtenerTareaAleatoria, obtenerTareaPrioritariaAleatoria } from '../utils/random.js';

const listaTareas = new ListaTareas();

export function anadirTarea() {
    const tareaAleatoria = obtenerTareaAleatoria();
    if (listaTareas.anado(tareaAleatoria)) {
        return listaTareas.mostrarTareas();
    }
        return 'DEBERÍAS EMPEZAR A HACER LAS TAREAS';
}

export function anadirPrioridad() {
    const tareaPrioritaria = obtenerTareaPrioritariaAleatoria();
    if (listaTareas.anadoPrior(tareaPrioritaria)) {
        return listaTareas.mostrarTareas();
    }
    return 'DEBERÍAS EMPEZAR A HACER LAS TAREAS';
}

export function eliminarTarea() {
    if (listaTareas.elimino()) {
        return listaTareas.mostrarTareas();
    }
    return 'NO HAY TAREAS SIN PRIORIDAD QUE ELIMINAR';
}

export function eliminarPrioridad() {
    if (listaTareas.eliminoPrior()) {
        return listaTareas.mostrarTareas();
    }
    return 'NO HAY TAREAS CON PRIORIDAD';
}
