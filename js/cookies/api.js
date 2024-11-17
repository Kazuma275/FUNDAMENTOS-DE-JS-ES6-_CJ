'use strict';

const apiUrl = 'https://swapi.dev/api/people/'; // URL de la API de Star Wars

// Función para obtener datos de la API
async function fetchStarWarsData(count = 1) {
    const results = [];
    for (let i = 0; i < count; i++) {
        const randomId = Math.floor(Math.random() * 83) + 1; // IDs válidos de personajes (1-83)
        try {
            const response = await fetch(`${apiUrl}${randomId}/`);
            if (response.ok) {
                const data = await response.json();
                results.push({
                    nombre: data.name,
                    valor: `Altura: ${data.height}, Peso: ${data.mass}` // Ejemplo de datos que puedes guardar
                });
            }
        } catch (error) {
            console.error('Error al obtener datos de la API:', error);
        }
    }
    return results;
}

// Escuchar los botones de carga
document.getElementById('btn-plus-1').addEventListener('click', async () => {
    const datos = await fetchStarWarsData(1);
    datos.forEach(dato => grabarDato(dato.nombre, dato.valor));
});

document.getElementById('btn-plus-5').addEventListener('click', async () => {
    const datos = await fetchStarWarsData(5);
    datos.forEach(dato => grabarDato(dato.nombre, dato.valor));
});
