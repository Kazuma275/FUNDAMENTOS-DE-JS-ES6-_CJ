"use strict"

function getSessionStorage(name) {
    const value = sessionStorage.getItem(name);
    return value ? decodeURIComponent(value) : null;
}
