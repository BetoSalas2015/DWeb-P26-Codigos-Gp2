"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  metodos y atributos static
class Matematicas {
    static PI = 3.14159;
    static calculaAreaCirculo(radio) {
        return this.PI * radio ** 2;
    }
    static calcularPerimetroCirculo(radio) {
        return this.PI * 2 * radio;
    }
}
console.log(Matematicas.PI);
console.log(Matematicas.calculaAreaCirculo(5));
console.log(Matematicas.calcularPerimetroCirculo(5));
