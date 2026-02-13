//  Clases Abstractas
abstract class FiguraGemetrica {
    abstract calcularArea(): number;

    mostrarArea(): void {
        console.log(`El area es: ${this.calcularArea()}`);
        
    }
}

class Rectangulo extends FiguraGemetrica {
    constructor(private largo: number, private alto: number) {
        super();
    }

    calcularArea(): number {
        return this.largo * this.alto;
    }
}

class Circulo extends FiguraGemetrica {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

const rectangulo = new Rectangulo(10, 5);
rectangulo.mostrarArea();

const circulo = new Circulo(5);
circulo.mostrarArea();