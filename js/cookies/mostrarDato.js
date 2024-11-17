'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto html dónde voy a mostrar los datos

    if (document.cookie && document.cookie.length > 0) { // si existe y hay al menos 1 'cookie'
        datosAcceso = document.cookie.split(";"); // creo un 'array' con todas las 'cookies'
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"), // creo una fila
                campoNombre = document.createElement("td"), // creo una celda para el nombre
                campoValor = document.createElement("td"), // creo una celda para la clave
                campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                campoActualizar = document.createElement("td"), // creo una celda para el botón 'actualizar'
                
                botonBorrar = document.createElement("button"), // creo un botón type="button"
                imagenBorrar = document.createElement("img"), // creo una imagen
                botonActualizar = document.createElement("button"), // creo un botón type="button"
                imagenActualizar = document.createElement("img"); // creo una imagen

            // DATOS
            datoAcceso = datoAcceso.split("=");
            campoNombre.innerHTML = decodeURIComponent(datoAcceso[0]); // escribo el nombre contenido en el array
            campoValor.innerHTML = decodeURIComponent(datoAcceso[1]); // escribo el valor contenido en el array

            // BOTÓN BORRAR
            botonBorrar.textContent = "Borrar";
            botonBorrar.className = "btn-api";

            botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                borrarDato(datoAcceso[0]); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
            });

            imagenBorrar.src = "../img/borrar.png"; // añado al botón una imagen
            imagenBorrar.width = "35"; // añado al botón los estilos
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";

            // BOTÓN ACTUALIZAR
            botonActualizar.textContent = "Actualizar";
            botonActualizar.className = "btn-api";

            botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                // Borrar el dato y cargarlo en los campos de entrada
                document.getElementById("nombre").value = decodeURIComponent(datoAcceso[0]);
                document.getElementById("valor").value = decodeURIComponent(datoAcceso[1]);
                borrarDato(datoAcceso[0]); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
            });

            imagenActualizar.src = "../img/actualizar.png"; // añado al botón una imagen
            imagenActualizar.width = "22"; // añado al botón los estilos
            imagenActualizar.height = "22";
            imagenActualizar.style = "vertical-align: middle";

            // DOM
            botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
            campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
            botonActualizar.appendChild(imagenActualizar); // añado la imagen al botón
            campoActualizar.appendChild(botonActualizar); // añado el botón a la celda

            linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
            linea.appendChild(campoValor); // añado a la línea la celda con el valor
            linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
            linea.appendChild(campoActualizar); // añado a la línea la celda con el botón

            cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
        });
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
    console.table(datosAcceso);
}
