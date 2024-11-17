'use strict';

function grabarDato(name, value) {
    datosAcceso.push({
        nombre: name,
        valor: value
    }); // introduzco los datos: nombre y clave, en el 'array'

    // guardo los datos del 'array' convirtiendolos en JSON en una variable localStorage llamada 'acceso'
    localStorage.setItem("localAcceso", JSON.stringify(datosAcceso)); 

    //mostrarDatos(); // ¿POR QUÉ ESTA ESTA LÍNEA COMENTADA? es más ¿POR QUÉ SE MUESTRAN EL RESTO DE DATOS DESPUÉS DE QUE SE PRODUZCA EL BORRADO?
}
