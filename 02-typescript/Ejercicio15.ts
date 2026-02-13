// Accessors (setters y los getters)
class Empleado {
    private _salario: number;

    constructor(salario: number) {
        this._salario = salario;
    }

    get salario() :number {
        return this._salario;
    }

    set salario(nuevoSalario: number) {
        if (nuevoSalario < 0) {
            console.log("Error: El salario no puede ser negativo");
        } else {
            this._salario = nuevoSalario;
            console.log(`El salario actualizado es: ${this.salario}`);
            
        }
    }

}

const empleado = new Empleado(1000);
console.log( empleado.salario );
empleado.salario = 1500;
empleado.salario = -1500;

