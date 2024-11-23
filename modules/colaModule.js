"use strict";

// Declaramos la cola y el límite
const colaTaller = [];
const AFORO_TALLER = 10;

// Función para añadir coches a la cola
export function llega() {
    const mensaje = document.getElementById("mensajeTaller");
    const listaCoches = document.getElementById("listaCoches");
    const coches = ["Vagón de tranvía", "Taxi antiguo", "Coche de carreras"];
    const cocheAleatorio = coches[Math.floor(Math.random() * coches.length)]; // Coche aleatorio

    console.log(`Coche añadido: ${cocheAleatorio}`); // Mostrar coche añadido

    if (colaTaller.length >= AFORO_TALLER) {
        mensaje.textContent = "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
        mensaje.style.color = "#4ECDC4"; // Mensaje en verde
    } else {
        colaTaller.push(cocheAleatorio);
        console.log(`Cola después de añadir coche: ${colaTaller}`); // Ver cola
        mensaje.textContent = `Se añadió un ${cocheAleatorio} a la lista de espera.`;
        mensaje.style.color = "#1A535C"; // Mensaje en azul verdoso oscuro
        actualizarLista(listaCoches);  // Actualizamos la lista de coches en el DOM
    }
}

// Función para atender coches en la cola
export function atiendo() {
    const mensaje = document.getElementById("mensajeTaller");
    const listaCoches = document.getElementById("listaCoches");

    if (colaTaller.length === 0) {
        mensaje.textContent = "NO HAY MÁS COCHES QUE REPARAR";
        mensaje.style.color = "#4ECDC4"; // Mensaje en verde
    } else {
        const cocheAtendido = colaTaller.shift(); // Sacamos el primer coche
        console.log(`Coche atendido: ${cocheAtendido}`); // Mostrar coche atendido
        mensaje.textContent = `Se está atendiendo el coche: ${cocheAtendido}.`;
        mensaje.style.color = "#1A535C"; // Mensaje en azul verdoso oscuro
        actualizarLista(listaCoches);  // Actualizamos la lista de coches en el DOM
    }
}

// Función para actualizar la lista visual de coches en el DOM
export function actualizarLista(listaCoches) {
    listaCoches.innerHTML = ""; // Limpiar lista antes de agregar los nuevos coches
    
    // Recorrer la cola y agregar cada coche a la lista
    colaTaller.forEach((coche, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${coche}`;
        listaCoches.appendChild(li);
    });
}
