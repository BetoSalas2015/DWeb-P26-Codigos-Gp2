"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Accessors (setters y los getters)
class Empleado {
    _salario;
    constructor(salario) {
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }
    set salario(nuevoSalario) {
        if (nuevoSalario < 0) {
            console.log("Error: El salario no puede ser negativo");
        }
        else {
            this._salario = nuevoSalario;
            console.log(`El salario actualizado es: ${this.salario}`);
        }
    }
}
const empleado = new Empleado(1000);
console.log(empleado.salario);
empleado.salario = 1500;
empleado.salario = -1500;
