"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos de datos Typescript
// nombre: type
var nombre = "Roberto";
var edad = 30;
var programador = true;
var lenguajes = ["C", "Java", "Typescript", "C#"];
var pareja = ["Edad", 30];
var meses;
(function (meses) {
    meses[meses["Enero"] = 0] = "Enero";
    meses[meses["Febrero"] = 1] = "Febrero";
    meses[meses["Marzo"] = 2] = "Marzo";
    meses[meses["Abril"] = 3] = "Abril";
})(meses || (meses = {}));
var calendario = meses.Abril;
var nada = undefined;
var Null = null;
var Undefined = undefined;
var temporal = pareja;
