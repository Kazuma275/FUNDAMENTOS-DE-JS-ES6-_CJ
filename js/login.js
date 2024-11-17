"use strict";

// Credenciales almacenadas internamente
const storageUsername = "sergio";
const storagePassword = "1234";

// Elementos del DOM
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = loginForm.querySelector("input[type=button]");
const logoutButton = document.getElementById("logoutButton"); // Botón de cerrar sesión

// Valida que el nombre de usuario tenga al menos 3 caracteres
const usernamePattern = /^.{3,}$/;

// Configuración de IndexedDB
let db;
const dbRequest = indexedDB.open("LoginDB", 1); // Nombre de la base de datos

// Crear la base de datos y el almacén de objetos
dbRequest.onupgradeneeded = function(event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("sessions", { keyPath: "key" });
    objectStore.createIndex("value", "value", { unique: false });
};

dbRequest.onsuccess = function(event) {
    db = event.target.result;
    checkSession();
};

dbRequest.onerror = function(event) {
};

// Función para guardar el estado de inicio de sesión y el nombre de usuario en IndexedDB
function saveSession(username, isLoggedIn) {
    const transaction = db.transaction(["sessions"], "readwrite");
    const objectStore = transaction.objectStore("sessions");

    // Guardamos el estado de inicio de sesión y el nombre de usuario
    objectStore.put({ key: "LoggedIn", value: isLoggedIn });
    objectStore.put({ key: "username", value: username });

    transaction.oncomplete = function() {
        console.log("Datos de inicio de sesión guardados:", { username, isLoggedIn });
    };

    transaction.onerror = function(event) {
        console.error("Error al guardar los datos de inicio de sesión", event.target.errorCode);
    };
}

// Función para verificar si el usuario ha iniciado sesión
function checkSession() {
    const transaction = db.transaction(["sessions"], "readonly");
    const objectStore = transaction.objectStore("sessions");

    const requestLoggedIn = objectStore.get("LoggedIn");
    const requestUsername = objectStore.get("username");

    requestLoggedIn.onsuccess = function(event) {
        const loggedInResult = event.target.result;
        if (loggedInResult && loggedInResult.value === true) {
            // Si está logueado, obtenemos el nombre de usuario
            requestUsername.onsuccess = function(event) {
                const usernameResult = event.target.result;
                if (usernameResult) {
                    loginMessage.textContent = `¡Bienvenido de nuevo, ${usernameResult.value}!`;
                    loginMessage.classList.add("text-success");
                    logoutButton.style.display = "block"; // Mostrar botón de cerrar sesión
                }
            };
        } else {
            console.log("El usuario no está logueado.");
            logoutButton.style.display = "none"; // Ocultar botón de cerrar sesión
        }
    };
}

// Manejar el envío del formulario de login
submitButton.addEventListener("click", function(event) {
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    // Validación del nombre de usuario
    if (!usernamePattern.test(usernameValue)) {
        loginMessage.textContent = "El nombre de usuario debe tener al menos 3 caracteres.";
        loginMessage.classList.remove("text-success");
        loginMessage.classList.add("text-danger");
        return;
    }

    // Verificación de las credenciales
    if (usernameValue === storageUsername && passwordValue === storagePassword) {
        loginMessage.textContent = `Bienvenido, ${usernameValue}!`;
        loginMessage.classList.remove("text-danger");
        loginMessage.classList.add("text-success");

        // Guardar estado de login y el nombre de usuario en IndexedDB
        saveSession(usernameValue, true);
        
        // Mostrar el mensaje de bienvenida
        loginMessage.style.display = "block";
        logoutButton.style.display = "block"; // Mostrar botón de cerrar sesión
    } else {
        // Si las credenciales son incorrectas
        const retry = confirm("Credenciales incorrectas. ¿Deseas intentarlo de nuevo?");
        
        if (retry) {
            // Si el usuario elige reintentar, limpiamos el formulario y reiniciamos
            usernameInput.value = "";
            passwordInput.value = "";
            usernameInput.focus();
            loginMessage.textContent = "";
        } else {
            // Si el usuario cancela, mostramos el mensaje de cancelación y detenemos la ejecución
            loginMessage.textContent = "Proceso de login cancelado.";
            loginMessage.classList.remove("text-success");
            loginMessage.classList.add("text-danger");
            return;
        }
    }
});

// Manejar el cierre de sesión
logoutButton.addEventListener("click", function() {
    // Cambiamos el estado de la sesión a falso en IndexedDB
    saveSession("", false); // Guardar nombre vacío y estado falso

    // Eliminamos la sesión de sessionStorage
    deleteSession('username');

    // Mostramos un mensaje de cierre de sesión
    loginMessage.textContent = "Has cerrado sesión. Volviendo al formulario de login...";
    loginMessage.classList.remove("text-success");
    loginMessage.classList.add("text-danger");

    // Ocultar botón de cerrar sesión
    logoutButton.style.display = "none"; 

    // Redirigir al formulario de login después de un corto retraso
    setTimeout(() => {
        window.location.href = "../index.html"; // Cambia esto a la ruta de tu formulario de login
    }, 2000);
});
