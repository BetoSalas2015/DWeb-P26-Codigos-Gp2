// Funciones Anónimas y flecha (Arrow)
let multiplicar = function(a: number, b: number):number {
    return a * b;
}

let multiplicarFlecha = (a: number, b: number): number => a * b ;

console.log(multiplicar(5,3));
console.log(multiplicarFlecha(5,3));

