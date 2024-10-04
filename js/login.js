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

        const usernamePattern = /^.{3,}$/;

        submitButton.addEventListener("click", function(event) {

            const usernameValue = usernameInput.value;
            const passwordValue = passwordInput.value;

            if (!usernamePattern.test(usernameValue)) {
                loginMessage.textContent = "El nombre de usuario debe tener al menos 3 caracteres.";
                loginMessage.classList.remove("text-success");
                loginMessage.classList.add("text-danger");
                return;
            }

            if (usernameValue === storageUsername && passwordValue === storagePassword) {

                loginMessage.textContent = `Bienvenido, ${usernameValue}!`; 
                loginMessage.classList.remove("text-danger");
                loginMessage.classList.add("text-success");

                setTimeout(function() {
                    loginCard.style.display = "none"; 
                    mainContent.style.display = "block"; 
                }, 2000);

            } else {
                
                const retry = confirm("Credenciales incorrectas. ¿Deseas intentarlo de nuevo?");
                if (retry) {
                    
                    usernameInput.value = "";
                    passwordInput.value = "";
                    usernameInput.focus();
                    loginMessage.textContent = "";
                } else {
                    
                    loginMessage.textContent = "Proceso de login cancelado.";
                    loginMessage.classList.remove("text-success");
                    loginMessage.classList.add("text-danger");
                }
            }
        });