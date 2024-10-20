"use strict"

function deleteSessionStorage(name) {
    sessionStorage.removeItem(name);
    console.log(`sessionStorage: Eliminada la clave ${name}`);
}