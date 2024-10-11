"use strict"

function deleteCookie(name) {
    let theDate = new Date();
    let currentMiliseconds = theDate.getTime();
    let expirationMiliseconds = currentMiliseconds - caducidadCookie;
    theDate.setTime(expirationMiliseconds);

    let cookieString = document.cookie.split("; "); // me quedo con: [nombre0=valor0, nombre1=valor1, ...]
    for (let i = 0; i < cookieString.length; i++) {
        let cookie = cookieString[i].split("="); // me quedo con: [nombre?, valor?]
        if (decodeURIComponent(cookie[0]) == name) {
            console.log(cookie[1]);
            document.cookie = encodeURIComponent(name) + "=;expires=" + theDate.toUTCString() + ";path=/;SameSite=Strict;Secure";
        }
    }
}