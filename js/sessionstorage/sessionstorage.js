// Al enviar el formulario, se guarda la información en sessionStorage
document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();  // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores introducidos en los campos de entrada
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;

    // Verificar si los campos no están vacíos
    if (nombre && valor) {
        // Crear un objeto para almacenar
        const datos = { nombre: nombre, valor: valor };

        // Guardar en sessionStorage
        sessionStorage.setItem(nombre, JSON.stringify(datos));

        // Limpiar los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("valor").value = "";

        // Llamar a la función para mostrar los datos guardados
        mostrarDatos();
    }
});

// Mostrar los datos almacenados en sessionStorage
function mostrarDatos() {
    const tbody = document.getElementById("cuerpo");
    tbody.innerHTML = "";  // Limpiar la tabla antes de llenarla

    // Recorrer todos los elementos guardados en sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
        // Obtener las claves de sessionStorage
        const clave = sessionStorage.key(i);
        const item = sessionStorage.getItem(clave);

        // Verificar que el item no es null
        if (item) {
            try {
                const datos = JSON.parse(item);

                // Verificar que el objeto datos tiene las propiedades esperadas
                if (datos && datos.nombre && datos.valor) {
                    // Crear una fila para cada elemento
                    const fila = document.createElement("tr");
                    fila.innerHTML = `
                        <td>${datos.nombre}</td>
                        <td>${datos.valor}</td>
                        <td><button class="btn-load" onclick="eliminarDato('${clave}')">Eliminar</button></td>`;
                    tbody.appendChild(fila);
                }
            } catch (error) {
                console.error(`Error al analizar los datos de la clave "${clave}":`, error);
            }
        }
    }
}

// Eliminar un dato de sessionStorage
function eliminarDato(clave) {
    sessionStorage.removeItem(clave);
    mostrarDatos();  // Volver a mostrar los datos después de eliminar uno
}

// Mostrar los datos cuando la página se carga
window.onload = function () {
    mostrarDatos();
};

// Función para cargar datos de la API
document.getElementById("btn-cargar-api").addEventListener("click", function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto

    const url = "https://swapi.dev/api/people/";  // API de Star Wars (personajes)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Seleccionamos un personaje aleatorio (si deseas un personaje específico, puedes cambiar esto)
            const personaje = data.results[Math.floor(Math.random() * data.results.length)];
            const nombre = personaje.name;
            const valor = `Altura: ${personaje.height}, Género: ${personaje.gender}, Año de nacimiento: ${personaje.birth_year}`;
            
            // Guardamos el personaje en sessionStorage
            sessionStorage.setItem(nombre, JSON.stringify({ nombre: nombre, valor: valor }));

            // Volver a mostrar los datos actualizados
            mostrarDatos();
        })
        .catch(error => {
            console.error("Error al cargar datos de la API:", error);
        });
});

// Función para agregar un solo dato (+1)
document.getElementById("btn-plus-1").addEventListener("click", function(event) {
    event.preventDefault();

    // Llamar a la función para cargar un personaje aleatorio desde la API
    cargarDatosAPI(1);
});

// Función para agregar cinco datos (+5)
document.getElementById("btn-plus-5").addEventListener("click", function(event) {
    event.preventDefault();

    // Llamar a la función para cargar cinco personajes aleatorios desde la API
    cargarDatosAPI(5);
});

// Función para cargar datos de la API
function cargarDatosAPI(cantidad) {
    const url = "https://swapi.dev/api/people/";  // API de Star Wars

    for (let i = 0; i < cantidad; i++) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Seleccionamos un personaje aleatorio cada vez
                const personaje = data.results[Math.floor(Math.random() * data.results.length)];
                const nombre = personaje.name;
                const valor = `Altura: ${personaje.height}, Género: ${personaje.gender}, Año de nacimiento: ${personaje.birth_year}`;

                // Guardamos el personaje en sessionStorage
                sessionStorage.setItem(nombre, JSON.stringify({ nombre: nombre, valor: valor }));

                // Volver a mostrar los datos
                mostrarDatos();
            })
            .catch(error => {
                console.error("Error al cargar datos de la API:", error);
            });
    }
}
