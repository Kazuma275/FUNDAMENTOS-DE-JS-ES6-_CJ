// script.js

let interval; // Variable para el intervalo
let velocidad = 1000; // Velocidad inicial en milisegundos

// Funciones de transformación
function aMayusculas(texto) {
    return texto.toUpperCase();
}

function aMinusculas(texto) {
    return texto.toLowerCase();
}

function capitalizarPrimeraLetra(texto) {
    return texto.replace(/\b\w/g, letra => letra.toUpperCase());
}

function capitalizarUltimaLetra(texto) {
    return texto.replace(/\w\b/g, letra => letra.toUpperCase());
}

function minuscularPrimeraLetra(texto) {
    return texto.replace(/\b\w/g, letra => letra.toLowerCase());
}

function minuscularUltimaLetra(texto) {
    return texto.replace(/\w\b/g, letra => letra.toLowerCase());
}

function vocalesMayusculas(texto) {
    return texto.replace(/[aeiou]/g, vocal => vocal.toUpperCase());
}

function vocalesMinusculas(texto) {
    return texto.replace(/[AEIOU]/g, vocal => vocal.toLowerCase());
}

function consonantesMayusculas(texto) {
    return texto.replace(/[^aeiou\s\d]/g, consonante => consonante.toUpperCase());
}

function consonantesMinusculas(texto) {
    return texto.replace(/[^AEIOU\s\d]/g, consonante => consonante.toLowerCase());
}

// Función para aplicar un cambio aleatorio al texto
function randomizarTransformacion(texto) {
    clearInterval(interval); // Limpiamos cualquier intervalo previo
    const funciones = [
        aMayusculas,
        aMinusculas,
        capitalizarPrimeraLetra,
        capitalizarUltimaLetra,
        minuscularPrimeraLetra,
        minuscularUltimaLetra,
        vocalesMayusculas,
        vocalesMinusculas,
        consonantesMayusculas,
        consonantesMinusculas
    ];

    interval = setInterval(() => {
        const funcionAleatoria = funciones[Math.floor(Math.random() * funciones.length)];
        const resultado = funcionAleatoria(texto);
        document.getElementById("inputText").value = resultado; // Actualizar el textarea con el resultado
    }, velocidad);
}

// Función para detener el proceso de aleatorio
function detenerRandomizacion() {
    clearInterval(interval); // Para detener el proceso
}

// Función para aumentar la velocidad de transformación
function aumentarVelocidad() {
    velocidad = Math.max(100, velocidad - 100); // Incrementar la velocidad (disminuir el intervalo)
}

// Función para disminuir la velocidad de transformación
function disminuirVelocidad() {
    velocidad += 500; // Reducir la velocidad (aumentar el intervalo)
}

// Función para hacer que el texto se transforme más rápido
function hacerMasRapido() {
    velocidad = Math.max(100, velocidad - 500); // Hacer que sea más rápido
}

// Agregando eventos a los botones
document.getElementById('btnMayus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = aMayusculas(texto);
});

document.getElementById('btnMinus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = aMinusculas(texto);
});

document.getElementById('btnPrimeraMayus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = capitalizarPrimeraLetra(texto);
});

document.getElementById('btnUltimaMayus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = capitalizarUltimaLetra(texto);
});

document.getElementById('btnPrimeraMinus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = minuscularPrimeraLetra(texto);
});

document.getElementById('btnUltimaMinus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = minuscularUltimaLetra(texto);
});

document.getElementById('btnVocalesMayus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = vocalesMayusculas(texto);
});

document.getElementById('btnVocalesMinus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = vocalesMinusculas(texto);
});

document.getElementById('btnConsonantesMayus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = consonantesMayusculas(texto);
});

document.getElementById('btnConsonantesMinus').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    document.getElementById("inputText").value = consonantesMinusculas(texto);
});

document.getElementById('btnAleatorio').addEventListener('click', () => {
    const texto = document.getElementById('inputText').value;
    randomizarTransformacion(texto);
});

document.getElementById('btnParar').addEventListener('click', () => {
    detenerRandomizacion();
});

document.getElementById('btnRapido').addEventListener('click', () => {
    hacerMasRapido(); // Llama a la función para aumentar la velocidad
});

document.getElementById('btnLento').addEventListener('click', () => {
    disminuirVelocidad();
});
