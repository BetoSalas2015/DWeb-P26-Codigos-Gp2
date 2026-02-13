"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Clases Abstractas
class FiguraGemetrica {
    mostrarArea() {
        console.log(`El area es: ${this.calcularArea()}`);
    }
}
class Rectangulo extends FiguraGemetrica {
    largo;
    alto;
    constructor(largo, alto) {
        super();
        this.largo = largo;
        this.alto = alto;
    }
    calcularArea() {
        return this.largo * this.alto;
    }
}
class Circulo extends FiguraGemetrica {
    radio;
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}
const rectangulo = new Rectangulo(10, 5);
rectangulo.mostrarArea();
const circulo = new Circulo(5);
circulo.mostrarArea();
