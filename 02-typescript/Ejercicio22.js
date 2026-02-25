"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Composición vs. Hrencia
class Motor {
    encender() {
        console.log('Motor Encendido.');
    }
    apagar() {
        console.log('Motor Apagado');
    }
}
class Automovil {
    motor; // Composición
    marca;
    constructor(marca) {
        this.motor = new Motor();
        this.marca = marca;
    }
    arrancar() {
        console.log(`${this.marca} encendiendo...`);
        this.motor.encender();
    }
    detener() {
        console.log(`${this.marca} apagando...`);
        this.motor.apagar();
    }
}
const miCoche = new Automovil('Toyota');
miCoche.arrancar();
miCoche.detener();
