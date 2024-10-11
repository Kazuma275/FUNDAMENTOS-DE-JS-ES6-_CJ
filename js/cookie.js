'use strict';

// Tiempo de caducidad de la cookie 
const caducidadCookie = 1 * 60 * 1000; // (1 minuto)

// Función para crear la cookie
function setCookie(name, value, time) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + time);
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expirationDate.toUTCString()};path=/;SameSite=Strict;Secure`;
}

// Función para obtener la cookie
function getCookie(name) {
    const cookieArr = document.cookie.split("; ");
    for (let cookie of cookieArr) {
        const [key, value] = cookie.split("=");
        if (decodeURIComponent(key) === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

// Función para eliminar la cookie
function deleteCookie(name) {
    setCookie(name, "", -1);
}

// Verifica si la cookie de sesión existe al cargar la página
window.onload = function () {
    const username = getCookie('username');
    if (username) {
        // Si existe la cookie, mostrar el contenido principal de inmediato
        mostrarContenidoPrincipal(username);
        iniciarTemporizadorDeSesion();
    } else {
        mostrarFormularioLogin();
    }
};

// Muestra el contenido principal si el usuario ha iniciado sesión
function mostrarContenidoPrincipal(username) {
    document.getElementById("loginCard").style.display = 'none';
    document.getElementById("mainContent").style.display = 'block';
    document.getElementById("loginMessage").innerText = `¡Bienvenido, ${username}!`;

    // Mostrar el enlace a las cookies y el enlace P3
    document.getElementById("cookies").style.display = 'block';
    document.getElementById("P3").style.display = 'block';

    // Mostrar el botón de cerrar sesión en la barra de navegación
    const logoutLink = document.getElementById("cerrarSesionBtn");
    logoutLink.style.display = 'block';
    logoutLink.addEventListener("click", function () {
        deleteCookie('username');
        window.location.reload();
    });
}

// Muestra el formulario de login si no hay sesión iniciada
function mostrarFormularioLogin() {
    // Esconder el botón de cerrar sesión si no hay sesión iniciada
    const logoutLink = document.getElementById("cerrarSesionBtn");
    logoutLink.style.display = 'none';
}

// Maneja el evento de inicio de sesión
document.querySelector(".btn").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Validar usuario y contraseña antes de proceder
        setCookie('username', username, caducidadCookie);

        // Añadimos un delay de 2 segundos antes de mostrar el contenido principal
        setTimeout(function() {
            mostrarContenidoPrincipal(username);
        }, 2000);

        // window.location.reload(); // Eliminado para que el timeout se ejecute correctamente
    } else {
        alert("Por favor, ingrese un nombre de usuario y una contraseña.");
    }
});

// Monitorea si la sesión (cookie) sigue activa
function iniciarTemporizadorDeSesion() {
    setInterval(function () {
        const username = getCookie('username');
        if (!username) {
            alert('Tu sesión ha expirado. Por favor, vuelve a iniciar sesión.');
            window.location.reload();
        }
    }, 5000);
}
