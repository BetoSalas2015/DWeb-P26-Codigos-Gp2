//  Funciones como tipos
// Definición de tipo función
type OperacionMatematica = (a: number, b:number) => number;

// Asignar funciones que cumplen co el tipo
let sumar: OperacionMatematica = (a: number, b:number) => a + b;
let restar: OperacionMatematica = (a: number, b: number) => a - b;

console.log(sumar(5,7));
console.log(restar(5,7));
