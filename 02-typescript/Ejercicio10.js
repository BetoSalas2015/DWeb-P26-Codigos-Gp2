"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funciones con paramatros variables (Rest)
function sumarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumarTodos(1, 2, 3, 4, 5, 6, 7));
console.log(sumarTodos(10, 20));
