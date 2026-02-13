"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funciones Anónimas y flecha (Arrow)
let multiplicar = function (a, b) {
    return a * b;
};
let multiplicarFlecha = (a, b) => a * b;
console.log(multiplicar(5, 3));
console.log(multiplicarFlecha(5, 3));
