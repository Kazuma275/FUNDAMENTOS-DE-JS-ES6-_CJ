'use strict';

function borrarDato(nombre) {
    console.log("Borrando dato...");
    let caducidadCookie = 1 * 60 * 1000; // caducidad por defecto, 1 minutos

    let theDate = new Date(); // obtengo la fecha actual
    let currentMiliseconds = theDate.getTime(); // obtengo la fecha actual en milisegundos
    let expirationMiliseconds = currentMiliseconds - caducidadCookie; // subtraigo la caducidad en milisegundos
    theDate.setTime(expirationMiliseconds); // actualizo la fecha (ahora con el decremento de la caducidad)
    console.log(`Fecha caducidad: ${theDate}`);

    // borro la 'cookie'
    document.cookie = nombre + "=;expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure"; 

    mostrarDatos(); // muestro el contenido de las 'cookies's
}