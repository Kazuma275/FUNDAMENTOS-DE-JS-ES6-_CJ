let matrixA = [], matrixB = [];

/* De donde "inputMatriz es el input de donde el usuario introduce las dimensiones" */

function generateRandomMatrix(inputMatriz) {
    const matrix = [];
    const min = 1; // Valor mínimo
    const max = 10; // Valor máximo
    for (let i = 0; i < inputMatriz; i++) {
        const row = [];
        for (let j = 0; j < inputMatriz; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matrix.push(row);
    }
    return matrix;
}

function generateMatrices() {
    const inputMatriz = parseInt(document.getElementById('inputMatriz').value);
    
    // Generar matrices aleatorias A y B
    matrixA = generateRandomMatrix(inputMatriz);
    matrixB = generateRandomMatrix(inputMatriz);

    displayMatrices();
}

function addMatrices(matrixA, matrixB) {
    const inputMatriz = matrixA.length;
    const result = [];
    for (let i = 0; i < inputMatriz; i++) {
        const row = [];
        for (let j = 0; j < inputMatriz; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

function subtractMatrices(matrixA, matrixB) {
    const inputMatriz = matrixA.length;
    const result = [];
    for (let i = 0; i < inputMatriz; i++) {
        const row = [];
        for (let j = 0; j < inputMatriz; j++) {
            row.push(matrixA[i][j] - matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const inputMatriz = matrixA.length;
    const result = [];
    for (let i = 0; i < inputMatriz; i++) {
        const row = [];
        for (let j = 0; j < inputMatriz; j++) {
            let sum = 0;
            for (let k = 0; k < inputMatriz; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function calculateSum() {
    if (matrixA.length === 0 || matrixB.length === 0) {
        alert("Por favor, genere las matrices primero.");
        return;
    }
    const sum = addMatrices(matrixA, matrixB);
    displayResult('Suma', sum);
}

function calculateDifference() {
    if (matrixA.length === 0 || matrixB.length === 0) {
        alert("Por favor, genere las matrices primero.");
        return;
    }
    const difference = subtractMatrices(matrixA, matrixB);
    displayResult('Resta', difference);
}

function calculateProduct() {
    if (matrixA.length === 0 || matrixB.length === 0) {
        alert("Por favor, genere las matrices primero.");
        return;
    }
    const product = multiplyMatrices(matrixA, matrixB);
    displayResult('Producto', product);
}

function displayMatrices() {
    const htmlA = `<h3>Matriz A</h3>${generateTable(matrixA)}`;
    const htmlB = `<h3>Matriz B</h3>${generateTable(matrixB)}`;
    document.getElementById('result').innerHTML = htmlA + htmlB;
}

function displayResult(operation, resultMatrix) {
    const htmlResult = `<h3>${operation}</h3>${generateTable(resultMatrix)}`;
    document.getElementById('result').innerHTML += htmlResult;
}

function generateTable(matrix) {
    let html = '<table>';
    matrix.forEach(row => {
        html += '<tr>';
        row.forEach(value => {
            html += `<td>${value}</td>`;
        });
        html += '</tr>';
    });
    html += '</table>';
    return html;
}