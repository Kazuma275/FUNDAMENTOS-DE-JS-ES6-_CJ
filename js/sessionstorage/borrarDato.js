'use strict';

function borrarDato(name) {
    let newDatosAcceso = [];
    let cont = 0;

    datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); // guardo el JSON de la variable localStorage 'acceso' en el array 'datosAcceso'
    for (let i = 0; i < datosAcceso.length; i++) {
        if (!(datosAcceso[i].nombre == name)) { // recorro el 'array' hasta encontrar el dato que busco
            newDatosAcceso[cont] = datosAcceso[i];
            cont++;
        }
        /* if (datosAcceso[i].nombre == name) { // recorro el 'array' hasta encontrar el dato que busco
            datosAcceso.splice(i, 1); // ¿POR QUÉ ESTA INSTRUCCIÓN NO BORRA TODAS LAS OCURRENCIAS?
        } */
    }
    datosAcceso = [...newDatosAcceso]; // 'spread' the array (clonar el array)
    // guardo los datos del 'array' convirtiendolos en JSON en una variable localStorage llamada 'acceso'
    localStorage.setItem("localAcceso", JSON.stringify(datosAcceso)); 

    mostrarDatos(); // vuelvo a mostrar los datos
}