/******************** función script.js de index.html ********************/

"use strict"

const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    mostrar(resultado);
});