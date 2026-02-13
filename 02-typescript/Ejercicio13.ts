//  Clases basicas con constructor
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad}`);
        
    }
}

const persona1 = new Persona("Juan", 35);
persona1.saludar();