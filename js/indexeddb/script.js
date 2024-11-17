"use strict";

// Verificar si IndexedDB está soportado en el navegador
if (!window.indexedDB) {
    alert("Tu navegador no soporta IndexedDB. Por favor, usa Chrome o Edge.");
} else {
    console.log("IndexedDB está soportado en este navegador.");
}

// --- Inicializar IndexedDB ---
function initIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('CRUD_DB', 1);

        request.onupgradeneeded = (event) => {
            console.log('IndexedDB: Actualizando esquema...');
            const db = event.target.result;

            if (!db.objectStoreNames.contains('entries')) {
                db.createObjectStore('entries', { keyPath: 'name' });
                console.log('IndexedDB: Object store creado.');
            }
        };

        request.onsuccess = (event) => {
            console.log('IndexedDB: Base de datos inicializada.');
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            console.error('IndexedDB: Error al inicializar:', event.target.error);
            reject(event.target.error);
        };
    });
}

async function checkIndexedDB() {
    try {
        const db = await initIndexedDB();
        const transaction = db.transaction('entries', 'readonly');
        const store = transaction.objectStore('entries');
        const request = store.getAll();

        request.onsuccess = (event) => {
            console.log('Datos en IndexedDB:', event.target.result);
        };

        request.onerror = (event) => {
            console.error('Error al obtener datos de IndexedDB:', event.target.error);
        };
    } catch (error) {
        console.error('Error en IndexedDB:', error);
    }
}

// --- Guardar datos en IndexedDB ---
async function saveToIndexedDB() {
    console.log('Iniciando guardado en IndexedDB...');
    
    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;
    const extra1 = document.getElementById('extra1').value;
    const extra2 = document.getElementById('extra2').value;
    const extra3 = document.getElementById('extra3').value;

    console.log('Datos del formulario:', { name, value, extra1, extra2, extra3 });

    if (!name || !value) {
        console.error('El nombre o el valor están vacíos.');
        alert('Por favor, ingresa al menos un nombre y un valor.');
        return;
    }

    try {
        const db = await initIndexedDB();
        console.log('Base de datos obtenida:', db);

        const transaction = db.transaction('entries', 'readwrite');
        const store = transaction.objectStore('entries');
        console.log('Transacción y almacén creados correctamente:', transaction, store);

        const data = { name, value, extra1, extra2, extra3 };
        const request = store.put(data);

        request.onsuccess = () => {
            console.log('Datos guardados exitosamente:', data);
            addRowToTable(data);
            clearForm();
        };

        request.onerror = (event) => {
            console.error('Error al guardar en IndexedDB:', event.target.error);
        };
    } catch (error) {
        console.error('Error en IndexedDB:', error);
    }
}

// --- Cargar datos de IndexedDB ---
async function loadFromIndexedDB() {
    try {
        const db = await initIndexedDB();
        const transaction = db.transaction('entries', 'readonly');
        const store = transaction.objectStore('entries');
        const request = store.getAll();

        request.onsuccess = () => {
            request.result.forEach((data) => addRowToTable(data));
        };
        request.onerror = (event) => console.error('Error al cargar datos de IndexedDB:', event.target.error);
    } catch (error) {
        console.error('IndexedDB Error:', error);
    }
}

// --- Cargar datos desde la API de Star Wars (cargar un personaje aleatorio) ---
async function fetchData() {
    try {
        // Obtener el número total de personajes
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        
        // Obtener el total de personajes disponibles (asumiendo que la API tiene un límite de 10 por página)
        const totalCharacters = data.count;  // El total de personajes
        
        // Generar un número aleatorio entre 1 y el total de personajes
        const randomId = Math.floor(Math.random() * totalCharacters) + 1;  // Número aleatorio entre 1 y totalCharacters

        // Solicitar los datos del personaje aleatorio
        const characterResponse = await fetch(`https://swapi.dev/api/people/${randomId}/`);
        const characterData = await characterResponse.json();

        const name = characterData.name;
        const value = characterData.height;
        const extra1 = characterData.mass;
        const extra2 = characterData.hair_color;
        const extra3 = characterData.skin_color;

        // Crear el objeto con los datos del personaje
        const row = { name, value, extra1, extra2, extra3 };

        // Guardar en la base de datos IndexedDB
        saveToIndexedDBFromAPI(row);

    } catch (error) {
        console.error('Error al cargar datos desde la API de Star Wars:', error);
    }
}

// --- Guardar datos del personaje de la API en IndexedDB ---
async function saveToIndexedDBFromAPI(data) {
    try {
        const db = await initIndexedDB();
        const transaction = db.transaction('entries', 'readwrite');
        const store = transaction.objectStore('entries');
        
        const request = store.put(data);

        request.onsuccess = () => {
            console.log('Datos guardados exitosamente:', data);
            addRowToTable(data);
        };

        request.onerror = (event) => {
            console.error('Error al guardar en IndexedDB:', event.target.error);
        };
    } catch (error) {
        console.error('IndexedDB Error:', error);
    }
}


// --- Añadir fila a la tabla ---
function addRowToTable(data) {
    const tableBody = document.querySelector('#dataTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.value}</td>
        <td>${data.extra1 || ''}</td>
        <td>${data.extra2 || ''}</td>
        <td>${data.extra3 || ''}</td>
        <td><button class="btn-api" onclick="deleteRow('${data.name}', this)">Borrar</button></td>
    `;

    tableBody.appendChild(row);
}

// --- Eliminar fila de IndexedDB y la tabla ---
async function deleteRow(name, button) {
    try {
        const db = await initIndexedDB();
        const transaction = db.transaction('entries', 'readwrite');
        const store = transaction.objectStore('entries');
        store.delete(name);

        transaction.oncomplete = () => {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
        transaction.onerror = (event) => console.error('Error al eliminar de IndexedDB:', event.target.error);
    } catch (error) {
        console.error('IndexedDB Error:', error);
    }
}

// --- Limpiar formulario ---
function clearForm() {
    document.getElementById('dataForm').reset();
}

// --- Inicializar eventos ---
window.onload = () => {
    document.getElementById('saveIndexedDB').addEventListener('click', saveToIndexedDB);
    document.getElementById('loadOne').addEventListener('click', () => fetchData(1));
    document.getElementById('loadFive').addEventListener('click', () => fetchData(5));
    loadFromIndexedDB(); // Cargar los datos almacenados en IndexedDB al cargar la página
};
