//  Composición vs. Hrencia
class Motor {
    encender(): void {
        console.log('Motor Encendido.');
    }

    apagar(): void {
        console.log('Motor Apagado');
    }
}

class Automovil {
    private motor: Motor;  // Composición
    marca: string;

    constructor(marca: string) {
        this.motor = new Motor();
        this.marca = marca;
    }

    arrancar(): void {
        console.log(`${this.marca} encendiendo...`);
        this.motor.encender();
    }

    detener(): void {
        console.log(`${this.marca} apagando...`);
        this.motor.apagar();
    }

}

const miCoche = new Automovil('Toyota');
miCoche.arrancar();
miCoche.detener();