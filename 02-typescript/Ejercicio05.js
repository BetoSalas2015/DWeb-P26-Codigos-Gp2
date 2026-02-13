"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parametros opcionales
function saludar(nombre, apellido) {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`;
    }
    else {
        return `Hola ${nombre}`;
    }
}
console.log(saludar("Roberto"));
console.log(saludar("Roberto", "Salazar"));
