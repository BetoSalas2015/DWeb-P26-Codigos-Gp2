"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Atributos de acceso:
class CuentaBancaria {
    titular;
    saldo;
    numeroCuenta;
    constructor(titular, saldo, numeroCuenta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroCuenta = numeroCuenta;
    }
    validarRetiro(monto) {
        return monto > 0 && monto <= this.saldo;
    }
    consultarSaldo() {
        return this.saldo;
    }
    retirar(monto) {
        if (this.validarRetiro(monto)) {
            this.saldo -= monto;
            console.log(`Retiro exitoso. Nuevo Saldo: ${this.saldo}`);
        }
        else {
            console.log("Retiro invalido");
        }
    }
}
const cuenta = new CuentaBancaria("Juan", 1000, "123456");
console.log(cuenta.titular);
//console.log(cuenta.saldo);      // Error: saldo es privado
console.log(cuenta.consultarSaldo());
cuenta.retirar(300);
cuenta.retirar(-40);
