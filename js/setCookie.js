"use strict"

function setCookie(name, value) {
    if (navigator.cookieEnabled == true) { 
        let theDate = new Date();
        let currentMiliseconds = theDate.getTime();
        let expirationMiliseconds = currentMiliseconds + caducidadCookie;
        theDate.setTime(expirationMiliseconds);
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + theDate.toUTCString() + ";path=/;SameSite=Strict;Secure";
    } else {
        alert("El uso de cookies está desactivado");
    }
   
}