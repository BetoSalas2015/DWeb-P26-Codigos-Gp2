"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Automovil {
    marca;
    modelo;
    velocidad = 0;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar() {
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} acelera. Velocidad ${this.velocidad}`);
    }
    frenar() {
        this.velocidad -= Math.max(0, this.velocidad - 10);
        console.log(`${this.marca} ${this.modelo} frena. Velocidad ${this.velocidad}`);
    }
}
const miAuto = new Automovil("Toyota", "Corola");
miAuto.acelerar();
miAuto.acelerar();
miAuto.frenar();
