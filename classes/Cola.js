"use strict";

class Cola {
    constructor(limite) {
        this.limite = limite;
        this.elementos = [];
    }

    encolar(elemento) {
        if (this.elementos.length < this.limite) {
            this.elementos.push(elemento);
            return true;
        }
        return false;
    }

    desencolar() {
        return this.elementos.shift() || null;
    }

    obtenerTodos() {
        return [...this.elementos];
    }

    estaLlena() {
        return this.elementos.length >= this.limite;
    }

    estaVacia() {
        return this.elementos.length === 0;
    }
}

export default Cola;
