"use strict";

// Función para almacenar un valor en sessionStorage
function setSessionStorage(name, value) {
    sessionStorage.setItem(name, encodeURIComponent(value || ""));
}
