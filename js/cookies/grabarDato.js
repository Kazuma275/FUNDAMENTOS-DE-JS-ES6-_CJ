'use strict';

function grabarDato(nombre, valor) {
    console.log("Grabando dato...");
    let caducidadCookie = 1 * 60 * 1000; // caducidad por defecto, 1 minutos

    let theDate = new Date(); // obtengo la fecha actual
    let currentMiliseconds = theDate.getTime(); // obtengo la fecha actual en milisegundos
    let expirationMiliseconds = currentMiliseconds + caducidadCookie; // añado la caducidad en milisegundos
    theDate.setTime(expirationMiliseconds); // actualizo la fecha (ahora con el incremento de la caducidad)

    // creo la 'cookie' con los atributos correspondientes
    document.cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(valor) + ";expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";

    mostrarDatos(); 
}