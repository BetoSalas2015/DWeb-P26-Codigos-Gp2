// Interfaces (herencia de interfaz)
interface Vehiculo {
    marca: string;
    modelo: string;
    acelerar(): void;
    frenar(): void;
}

class Automovil implements Vehiculo {
    marca: string;
    modelo: string;
    velocidad: number = 0;

    constructor(marca: string, modelo:string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar(): void {
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} acelera. Velocidad ${this.velocidad}`);
        
    }

    frenar(): void {
        this.velocidad -= Math.max(0, this.velocidad - 10);      
        console.log(`${this.marca} ${this.modelo} frena. Velocidad ${this.velocidad}`);
    }   
}

const miAuto = new Automovil("Toyota", "Corola");
miAuto.acelerar();
miAuto.acelerar();
miAuto.frenar();