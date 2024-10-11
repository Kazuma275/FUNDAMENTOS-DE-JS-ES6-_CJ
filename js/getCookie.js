"use strict"

function getCookieFor(name) {
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (decodeURIComponent(cookie[0]) == name) { 
            return decodeURIComponent(cookie[1]);
        }
    }
}

function getCookieForOf(name) {
    let cookies = document.cookie.split("; "); 
    for (let cookie of cookies) {
        cookie = cookie.split("="); 
        if (decodeURIComponent(cookie[0]) == name) {
            return decodeURIComponent(cookie[1]); 
        }
    }

}