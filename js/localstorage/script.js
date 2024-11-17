"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const apiBaseUrl = 'https://swapi.dev/api/people/';
    const dataTable = document.querySelector('#dataTable tbody');
    const saveStorageButton = document.getElementById('saveStorage');
    const loadOneButton = document.getElementById('loadOne');
    const loadFiveButton = document.getElementById('loadFive');
    
    // Función para actualizar la tabla desde LocalStorage
    const updateTable = () => {
        dataTable.innerHTML = ''; // Limpia la tabla
        const storageData = JSON.parse(localStorage.getItem('starWarsData')) || [];
        storageData.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.value}</td>
                <td>${item.extra1 || ''}</td>
                <td>${item.extra2 || ''}</td>
                <td>${item.extra3 || ''}</td>
                <td><button class="delete btn-api" data-index="${index}">Borrar</button></td>
            `;
            dataTable.appendChild(row);
        });
    };

    // Función para guardar un dato en LocalStorage
    const saveToStorage = (data) => {
        const storageData = JSON.parse(localStorage.getItem('starWarsData')) || [];
        storageData.push(data);
        localStorage.setItem('starWarsData', JSON.stringify(storageData));
        updateTable();
    };

    // Función para borrar un dato de LocalStorage
    const deleteFromStorage = (index) => {
        const storageData = JSON.parse(localStorage.getItem('starWarsData')) || [];
        storageData.splice(index, 1);
        localStorage.setItem('starWarsData', JSON.stringify(storageData));
        updateTable();
    };

    // Función para cargar datos desde la API
    const fetchDataFromAPI = async (count = 1) => {
        try {
            for (let i = 0; i < count; i++) {
                const response = await fetch(`${apiBaseUrl}?page=${Math.ceil(Math.random() * 9)}`);
                const data = await response.json();
                const character = data.results[Math.floor(Math.random() * data.results.length)];
                const formattedData = {
                    name: character.name,
                    value: `Altura: ${character.height}`,
                    extra1: `Peso: ${character.mass}`,
                    extra2: `Género: ${character.gender}`,
                    extra3: `Nacimiento: ${character.birth_year}`,
                };
                saveToStorage(formattedData);
            }
        } catch (error) {
            console.error('Error al cargar datos desde la API:', error);
        }
    };

    // Evento: Guardar datos desde el formulario
    saveStorageButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const value = document.getElementById('value').value;
        const extra1 = document.getElementById('extra1').value;
        const extra2 = document.getElementById('extra2').value;
        const extra3 = document.getElementById('extra3').value;

        if (!name || !value) {
            alert('El nombre y el valor son obligatorios.');
            return;
        }

        const data = { name, value, extra1, extra2, extra3 };
        saveToStorage(data);

        // Limpia el formulario
        document.getElementById('dataForm').reset();
    });

    // Evento: Cargar un dato desde la API
    loadOneButton.addEventListener('click', () => {
        fetchDataFromAPI(1);
    });

    // Evento: Cargar cinco datos desde la API
    loadFiveButton.addEventListener('click', () => {
        fetchDataFromAPI(5);
    });

    // Evento: Borrar datos de la tabla
    dataTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            const index = event.target.getAttribute('data-index');
            deleteFromStorage(index);
        }
    });

    // Inicializa la tabla al cargar la página
    updateTable();
});
