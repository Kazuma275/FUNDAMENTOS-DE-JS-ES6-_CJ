'use strict';

function mostrarDatos() {
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto html dónde voy a mostrar los datos

    if (localStorage.getItem("localAcceso") && JSON.parse(localStorage.getItem("localAcceso")).length > 0) { // si existe y hay al menos 1
        datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); // guardo el JSON de la variable localStorage 'acceso' en el array 'datosAcceso'
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"), // creo una fila
                campoNombre = document.createElement("td"), // creo una celda para el nombre
                campoValor = document.createElement("td"), // creo una celda para la clave
                campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                botonBorrar = document.createElement("button"), // creo un botón
                imagenBorrar = document.createElement("img"); // creo una imagen
            // DATOS

            campoNombre.innerHTML = datoAcceso.nombre; // escribo el nombre contenido en el array
            campoValor.innerHTML = datoAcceso.valor; // escribo el valor contenida en el array
            // BOTÓN
            botonBorrar.textContent = "Borrar" // etiqueto el botón
            botonBorrar.className = "borrar"; // asigno el botón a una clase
            botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                borrarDato(datoAcceso.nombre); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
            });

            imagenBorrar.src = "./img/delete.svg"; // añado al botón una imagen
            imagenBorrar.width = "22"; // añado al botón los estilos
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";
            // DOM
            botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
            campoBorrar.appendChild(botonBorrar); // añado el botón a la celda

            linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
            linea.appendChild(campoValor); // añado a la línea la celda con la clave
            linea.appendChild(campoBorrar); // añado a la línea la celda con el botón

            cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
        });
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
    console.table(datosAcceso);
}
