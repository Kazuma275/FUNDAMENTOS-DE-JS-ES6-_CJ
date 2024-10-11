"use strict";

const storageUsername = "sergio";
const storagePassword = "1234";

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const loginCard = document.getElementById("loginCard");
const mainContent = document.getElementById("mainContent");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = loginForm.querySelector("input[type=button]");

// Selecciona los elementos del navbar que quieres ocultar
const p3Link = document.getElementById("P3");
const cookiesLink = document.getElementById("cookies");

// Oculta los elementos "P3" y "Cookies" al cargar la página
p3Link.style.display = "none";
cookiesLink.style.display = "none";

// Valida que el nombre de usuario tenga al menos 3 caracteres
const usernamePattern = /^.{3,}$/;

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
        
        // Mostrar el mensaje de bienvenida
        loginMessage.style.display = "block";

        // Redirigir a la nueva página después de 2 segundos
        setTimeout(function() {
            window.location.href = "./login/index.html";
        }, 2000);

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
