"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Clases basicas con constructor
class Persona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad}`);
    }
}
const persona1 = new Persona("Juan", 35);
persona1.saludar();
