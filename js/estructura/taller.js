"use strict";

/* ESTE ES EL JAVASCRIPT PRINCIPAL DE COLADA, MODULARIZADO */

// Importar las funciones necesarias
import { llega, atiendo } from "../../modules/colaModule.js";

// Inicializar los eventos de los botones
document.getElementById('añadirCoche').addEventListener('click', llega);
document.getElementById('atenderCoche').addEventListener('click', atiendo);
