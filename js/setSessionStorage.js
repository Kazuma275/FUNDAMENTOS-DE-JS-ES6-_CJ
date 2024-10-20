"use strict"

function setSessionStorage(name, value) {
    sessionStorage.setItem(name, encodeURIComponent(value || ""));
    console.log(`sessionStorage: ${name}=${encodeURIComponent(value || "")}`);
}