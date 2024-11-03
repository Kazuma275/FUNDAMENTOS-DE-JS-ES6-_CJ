"use strict";

// Configuración de IndexedDB
let db;
const dbRequest = indexedDB.open("LoginDB", 1);

// Crear la base de datos y el almacén de objetos
dbRequest.onupgradeneeded = function(event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("sessions", { keyPath: "key" });
    objectStore.createIndex("value", "value", { unique: false });
};

dbRequest.onsuccess = function(event) {
    db = event.target.result;
};

// Función para guardar el estado de inicio de sesión en IndexedDB
function saveSession(value) {
    const transaction = db.transaction(["sessions"], "readwrite");
    const objectStore = transaction.objectStore("sessions");
    const request = objectStore.put({ key: "LoggedIn", value: value });
}

// Función para verificar si el usuario ha iniciado sesión
function checkSession(callback) {
    const transaction = db.transaction(["sessions"], "readonly");
    const objectStore = transaction.objectStore("sessions");
    const request = objectStore.get("LoggedIn");

    request.onsuccess = function(event) {
        const result = event.target.result;
        if (result && result.value === true) {
            callback(true);
        } else {
            callback(false);
        }
    };
}
