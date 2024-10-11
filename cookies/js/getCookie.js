"use strict"

function getCookieFor(name) {
    console.log(document.cookie);
    let cookies = document.cookie.split("; "); // me quedo con: [nombre0=valor0, nombre1=valor1, ...]
    console.log(cookies);

    console.log("ESTOY EN EL for");
    for (let i = 0; i < cookies.length; i++) {
        console.log(`Esta es la cookie: ${i}`);
        let cookie = cookies[i].split("="); // me quedo con: [nombre?, valor?]
        console.log(cookie);
        if (decodeURIComponent(cookie[0]) == name) { // comparo nombre? con el que estoy buscando
            return decodeURIComponent(cookie[1]); // me quedo con el valor del nombre que estoy buscando
        }
    }
}

function getCookieForOf(name) {
    console.log(document.cookie);
    let cookies = document.cookie.split("; "); // me quedo con: [nombre0=valor0, nombre1=valor1, ...]
    console.log(cookies);

    console.log("ESTOY EN EL For..of");
    for (let cookie of cookies) {
        cookie = cookie.split("="); // me quedo con: [nombre?, valor?]
        console.log(cookie);
        if (decodeURIComponent(cookie[0]) == name) { // comparo nombre? con el que estoy buscando
            return decodeURIComponent(cookie[1]); // me quedo con el valor del nombre que estoy buscando
        }
    }

}