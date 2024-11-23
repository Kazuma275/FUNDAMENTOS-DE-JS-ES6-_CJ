"use strict";

class Pila {
    constructor() {
        this.pilaPrendas = [];
    }

    // Agregar prenda a la pila
    agregarPrenda(prenda) {
        this.pilaPrendas.push(prenda);
        return { mensaje: `La prenda "${prenda}" ha sido añadida a la pila.` };
    }

    // Sacar prenda de la pila
    sacarPrenda() {
        if (this.pilaPrendas.length === 0) {
            return { mensaje: "No hay prendas en la pila para sacar." };
        }
        const prendaSacada = this.pilaPrendas.pop();
        return { mensaje: `Se ha sacado la prenda "${prendaSacada}".` };
    }

    // Obtener todas las prendas de la pila
    obtenerPrendas() {
        return this.pilaPrendas;
    }
}

export default Pila;
