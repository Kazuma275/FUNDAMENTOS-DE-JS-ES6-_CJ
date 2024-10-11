"use strict"

function setCookie(name, value) {
    if (navigator.cookieEnabled == true) { // comprueba que el navegador sea compatible
        let theDate = new Date(); // necesito la fecha actual
        console.log(theDate);
        let currentMiliseconds = theDate.getTime(); // calculo la fecha actual en milisegundos desde 1970
        console.log(currentMiliseconds);
        let expirationMiliseconds = currentMiliseconds + caducidadCookie; // sumo la caducidad a la fecha actual
        console.log(expirationMiliseconds);
        theDate.setTime(expirationMiliseconds); // creo una nueva fecha con la caducidad añadida
        console.log(theDate);
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + theDate.toUTCString() + ";path=/;SameSite=Strict;Secure";
    } else {
        alert("El uso de cookies está desactivado");
    }
   
}