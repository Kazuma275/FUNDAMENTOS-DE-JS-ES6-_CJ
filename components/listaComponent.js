"use strict";

import { llega, atiendo } from "../modules/listaModule.js";

export function inicializarCola() {
    const listaCoches = document.getElementById("listaCoches");
    const mensajeTaller = document.getElementById("mensajeTaller");
    const botonAñadir = document.getElementById("añadirCoche");
    const botonAtender = document.getElementById("atenderCoche");

    botonAñadir.addEventListener("click", () => llega(listaCoches, mensajeTaller));
    botonAtender.addEventListener("click", () => atiendo(listaCoches, mensajeTaller));
}
