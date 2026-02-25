//  metodos y atributos static
class Matematicas {
    static PI: number = 3.14159;

    static calculaAreaCirculo( radio:  number): number {
        return this.PI * radio ** 2;
    }

    static calcularPerimetroCirculo(radio: number): number {
        return this.PI * 2 * radio;
    }
}

console.log(Matematicas.PI);
console.log(Matematicas.calculaAreaCirculo(5));
console.log(Matematicas.calcularPerimetroCirculo(5));


