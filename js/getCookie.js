"use strict"

function getCookieFor(name) {
    let cookies = document.cookie.split("; "); // me quedo con: [nombre0=valor0, nombre1=valor1, ...]

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("="); // me quedo con: [nombre?, valor?]
        if (decodeURIComponent(cookie[0]) == name) { // comparo nombre? con el que estoy buscando
            return decodeURIComponent(cookie[1]); // me quedo con el valor del nombre que estoy buscando
        }
    }
}

function getCookieForOf(name) {
    let cookies = document.cookie.split("; "); // me quedo con: [nombre0=valor0, nombre1=valor1, ...]

    for (let cookie of cookies) {
        cookie = cookie.split("="); // me quedo con: [nombre?, valor?]
        if (decodeURIComponent(cookie[0]) == name) { // comparo nombre? con el que estoy buscando
            return decodeURIComponent(cookie[1]); // me quedo con el valor del nombre que estoy buscando
        }
    }

}