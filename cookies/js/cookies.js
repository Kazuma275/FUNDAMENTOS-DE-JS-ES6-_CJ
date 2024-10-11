'use strict';

let caducidadCookie = 1 * 60 * 250; // caducidad por defecto, 15 segundos

const nombre = document.getElementById("nombre");
const valor = document.getElementById("valor");
document.getElementById("guardar").addEventListener("click", function () {
    setCookie(nombre.value, valor.value);
});

document.getElementById("mostrar").addEventListener("click", function () {
    console.log(getCookieFor(nombre.value));
    console.log(getCookieForOf(nombre.value));
/*     console.log(getCookieforEach(nombre.value)); */
});

document.getElementById("borrar").addEventListener("click", function () {
    deleteCookie(nombre.value);
});