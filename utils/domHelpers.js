"use strict";

/* Pila */

export function renderizarCesta(CESTA_COLADA) {
    const listaPrendas = document.getElementById('listaPrendas');
    listaPrendas.innerHTML = ''; // Limpia la lista actual
    CESTA_COLADA.forEach(prenda => {
        const item = document.createElement('li');
        item.textContent = prenda;
        listaPrendas.insertBefore(item, listaPrendas.firstChild);
    });
}

// Función para mostrar un mensaje en el DOM
function mostrarMensaje(mensaje) {
    const mensajeElemento = document.getElementById("mensajeColada");
    if (mensajeElemento) {
        mensajeElemento.textContent = mensaje;
    }
}

export { mostrarMensaje };

/* Cola */

// Función para actualizar la lista visual de coches en el DOM
export function actualizarLista(listaCoches) {
    listaCoches.innerHTML = ""; // Vaciar la lista antes de agregar los elementos
    colaTaller.forEach((coche, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${coche}`;
        listaCoches.appendChild(li);
    });
}

