"use strict"
// api.js

document.getElementById('btn-cargar-api').addEventListener('click', cargarDatosApi);
document.getElementById('btn-plus-1').addEventListener('click', () => cargarDatosDeApiConCantidad(1));
document.getElementById('btn-plus-5').addEventListener('click', () => cargarDatosDeApiConCantidad(5));

async function cargarDatosApi(event) {
    event.preventDefault();  // Para evitar que el formulario se envíe
    
    // Si ya tenemos los datos en sessionStorage, los mostramos
    if (sessionStorage.getItem('starWarsData')) {
        mostrarDatosDeStorage();
        return;
    }
    
    try {
        // Hacemos la solicitud a la API de Star Wars
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        
        // Guardamos los datos en sessionStorage
        sessionStorage.setItem('starWarsData', JSON.stringify(data.results));
        
        // Mostrar los datos inmediatamente después de guardarlos
        mostrarDatosDeStorage();
    } catch (error) {
        console.error("Error al cargar la API de Star Wars:", error);
    }
}

// Función para cargar un número específico de personajes y acumularlos
function cargarDatosDeApiConCantidad(cantidad) {
    // Si no hay datos en sessionStorage, no hacemos nada
    if (!sessionStorage.getItem('starWarsData')) {
        alert('Primero debes cargar los datos desde la API.');
        return;
    }

    // Recuperamos los datos de la API almacenados en sessionStorage
    const datos = JSON.parse(sessionStorage.getItem('starWarsData'));
    
    // Mostrar solo la cantidad de personajes solicitada (sin borrar los anteriores)
    const tbody = document.getElementById('cuerpo');
    
    // Acceder a los datos que aún no han sido mostrados
    const personajesParaMostrar = datos.slice(tbody.rows.length, tbody.rows.length + cantidad);
    
    personajesParaMostrar.forEach(personaje => {
        const row = document.createElement('tr');
        
        const nombre = document.createElement('td');
        nombre.textContent = personaje.name;
        row.appendChild(nombre);
        
        const altura = document.createElement('td');
        altura.textContent = personaje.height;
        row.appendChild(altura);
        
        const masa = document.createElement('td');
        masa.textContent = personaje.mass;
        row.appendChild(masa);
        
        // Crear el botón de eliminar
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = "Eliminar";
        eliminarButton.classList.add('btn-eliminar');
        eliminarButton.addEventListener('click', () => eliminarFila(row, personaje));
        
        // Añadir el botón de eliminar a la fila
        const tdEliminar = document.createElement('td');
        tdEliminar.appendChild(eliminarButton);
        row.appendChild(tdEliminar);
        
        tbody.appendChild(row);
    });
}

// Función para eliminar una fila
function eliminarFila(fila, personaje) {
    // Primero eliminamos la fila de la tabla
    fila.remove();
    
    // Recuperamos los datos de sessionStorage
    const datos = JSON.parse(sessionStorage.getItem('starWarsData'));
    
    // Filtramos los datos eliminando el personaje que corresponde a la fila
    const nuevosDatos = datos.filter(p => p.name !== personaje.name);
    
    // Actualizamos los datos en sessionStorage
    sessionStorage.setItem('starWarsData', JSON.stringify(nuevosDatos));
}

// Función para mostrar los datos guardados en sessionStorage
function mostrarDatosDeStorage() {
    // Recuperamos los datos del sessionStorage
    const datos = JSON.parse(sessionStorage.getItem('starWarsData'));

    // Limpiar la tabla antes de mostrar nuevos datos
    const tbody = document.getElementById('cuerpo');
    tbody.innerHTML = '';

    // Rellenar la tabla con todos los personajes
    datos.forEach(personaje => {
        const row = document.createElement('tr');
        
        const nombre = document.createElement('td');
        nombre.textContent = personaje.name;
        row.appendChild(nombre);
        
        const altura = document.createElement('td');
        altura.textContent = personaje.height;
        row.appendChild(altura);
        
        const masa = document.createElement('td');
        masa.textContent = personaje.mass;
        row.appendChild(masa);
        
        // Crear el botón de eliminar
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = "Eliminar";
        eliminarButton.classList.add('btn-eliminar');
        eliminarButton.addEventListener('click', () => eliminarFila(row, personaje));
        
        // Añadir el botón de eliminar a la fila
        const tdEliminar = document.createElement('td');
        tdEliminar.appendChild(eliminarButton);
        row.appendChild(tdEliminar);
        
        tbody.appendChild(row);
    });
}
