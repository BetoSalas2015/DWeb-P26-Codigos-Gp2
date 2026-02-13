"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Funciones con tipos de retorno complejos
function obtenerDatosUsuario(id) {
    return {
        nombre: 'Roberto',
        edad: 40
    };
}
let usuario = obtenerDatosUsuario(1);
console.log(usuario);
