let loadedCharacterInfo = ''; // Variable para almacenar la información del personaje
let loadedCharacterImage = ''; // Variable para almacenar la URL de la imagen del personaje

// Selección aleatoria de personajes entre los primeros 83 personajes de Star Wars
function getRandomCharacter() {
    const randomId = Math.floor(Math.random() * 83) + 1; // Genera un ID aleatorio entre 1 y 83
    const url = `https://www.swapi.tech/api/people/${randomId}`; // URL de la API

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                const character = data.result.properties;

                // Guardamos la información en una variable
                loadedCharacterInfo = `
                    Nombre: ${character.name}
                    Altura: ${character.height} cm
                    Peso: ${character.mass} kg
                    Color de pelo: ${character.hair_color}
                    Color de ojos: ${character.eye_color}
                    Año de nacimiento: ${character.birth_year}
                    Género: ${character.gender}`;

                // Guardamos la imagen del personaje
                loadedCharacterImage = `https://starwars-visualguide.com/assets/img/characters/${randomId}.jpg`; // URL de la imagen

                // Mostrar el botón para mostrar texto y el botón para ocultar texto
                document.getElementById('showTextBtn').style.display = 'inline';
                document.getElementById('hideTextBtn').style.display = 'inline'; // Mostrar botón de ocultar
            } else {
                console.error('Personaje no encontrado.');
            }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

// Asignamos la función al botón de cargar texto
document.getElementById('loadTextBtn').addEventListener('click', getRandomCharacter);

// Asignamos la función para mostrar el texto en el textarea y la imagen
document.getElementById('showTextBtn').addEventListener('click', () => {
    // Muestra el texto en el textarea solo si se ha cargado
    if (loadedCharacterInfo) {
        document.getElementById('inputText').value = loadedCharacterInfo; // Carga la información en el textarea
        
        // Muestra la imagen del personaje
        const characterImage = document.getElementById('characterImage');
        characterImage.src = loadedCharacterImage; // Asignar la URL de la imagen
        characterImage.style.display = 'block'; // Muestra la imagen
    } else {
        alert("Por favor, carga un personaje primero."); // Alerta si no se ha cargado ningún personaje
    }
});

// Asignamos la función para ocultar el texto en el textarea
document.getElementById('hideTextBtn').addEventListener('click', () => {
    document.getElementById('inputText').value = ''; // Limpia el textarea
    document.getElementById('characterImage').style.display = 'none'; // Oculta la imagen
});

// Llamamos a la función una vez al cargar la página para mostrar un personaje por defecto
//getRandomCharacter(); // Esta línea se eliminó para no cargar automáticamente
