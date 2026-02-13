//  Herencia con extendas (de tipo)
class Animal {
    protected nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido.`);
        
    }
}

class Perro extends Animal {
    protected raza: string;

    constructor(nombre: string, raza: string) {
        super(nombre);
        this.raza = raza;
    }

    hacerSonido(): void {       // _Override (Sobreimposición)
        console.log(`${this.nombre} ladra!`);
    }

    mostrarInfo(): void {
        console.log(`${this.nombre} es un ${this.raza}`);
        
    }
}

const miPerro = new Perro("Max", "Golden Retriever");
miPerro.hacerSonido();
miPerro.mostrarInfo();