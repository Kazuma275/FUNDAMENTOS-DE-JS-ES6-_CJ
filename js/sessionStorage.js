'use strict';

// Función para establecer un valor en sessionStorage
function setSession(key, value) {
    sessionStorage.setItem(key, value);
}

// Función para obtener un valor de sessionStorage
function getSession(key) {
    return sessionStorage.getItem(key);
}

// Función para eliminar un valor de sessionStorage
function deleteSession(key) {
    sessionStorage.removeItem(key);
}

// Verifica si la sesión existe al cargar la página
window.onload = function () {
    const username = getSession('username');
    if (username) {
        // Si existe el valor en sessionStorage, mostrar el contenido principal de inmediato
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

    // Mostrar los enlaces
    document.getElementById("cookies").style.display = 'block';
    document.getElementById("P3").style.display = 'block';
    document.getElementById("string").style.display = 'block';
    document.getElementById("indexedb").style.display = 'block';
    document.getElementById("crud").style.display = 'block';

    // Mostrar el botón de cerrar sesión en la barra de navegación
    const logoutLink = document.getElementById("cerrarSesionBtn");
    logoutLink.addEventListener("click", function () {
        deleteSession('username');
        window.location.href = "../index.html";
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
        setSession('username', username);

        // Añadimos un delay de 2 segundos antes de mostrar el contenido principal
        setTimeout(function() {
            window.location.href = "login/index.html";
        }, 2000);

        // window.location.reload(); // Eliminado para que el timeout se ejecute correctamente
    } else {
        alert("Por favor, ingrese un nombre de usuario y una contraseña.");
    }
});

// Monitorea si la sesión (sessionStorage) sigue activa
function iniciarTemporizadorDeSesion() {
    setInterval(function () {
        const username = getSession('username');
        if (!username) {
            alert('Tu sesión ha expirado. Por favor, vuelve a iniciar sesión.');
            window.location.href = "../index.html";
        }
    }, 5000);
}
