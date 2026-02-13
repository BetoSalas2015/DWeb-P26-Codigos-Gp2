"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Herencia con extendas (de tipo)
class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}
class Perro extends Animal {
    raza;
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    hacerSonido() {
        console.log(`${this.nombre} ladra!`);
    }
    mostrarInfo() {
        console.log(`${this.nombre} es un ${this.raza}`);
    }
}
const miPerro = new Perro("Max", "Golden Retriever");
miPerro.hacerSonido();
miPerro.mostrarInfo();
