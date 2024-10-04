
window.onload = function () {
    const usuarioCorrecto = "sergio";
    const contrasenaCorrecta = "1234";

    function solicitarCredenciales() {
        let usuario = "";
        let contrasena = "";

        while (usuario.length < 3) {
            usuario = prompt("Ingresa tu nombre de usuario (mínimo 3 caracteres):");
            if (usuario === null) {
                alert("Acceso cancelado.");
                return false;
            }
            if (usuario.length < 3) {
                alert("El nombre de usuario debe tener al menos 3 caracteres.");
            }
        }

        contrasena = prompt("Ingresa tu contraseña:");
        if (contrasena === null) {
            alert("Acceso cancelado.");
            return false;
        }

        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
            alert("Bienvenido, " + usuario + "!");
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('P3').style.display = 'block';
        } else {
            const reintentar = confirm("Credenciales incorrectas. ¿Quieres intentarlo de nuevo?");
            if (reintentar) {
                solicitarCredenciales();
            } else {
                alert("Acceso denegado.");
            }
        }
    }

    // Ejecutar inmediatamente cuando la página se ha cargado completamente
    solicitarCredenciales();
};
