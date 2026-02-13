// Atributos de acceso:
class CuentaBancaria {
    public titular: string;
    private saldo: number;
    protected numeroCuenta: string;

    public constructor(titular: string, saldo: number, numeroCuenta: string) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroCuenta = numeroCuenta;
    }

    private validarRetiro(monto: number): boolean {
        return monto > 0 && monto <= this.saldo;
    }

    public consultarSaldo(): number {
        return this.saldo
    } 

    public retirar(monto: number): void {
        if (this.validarRetiro(monto)) {
            this.saldo -= monto;
            console.log(`Retiro exitoso. Nuevo Saldo: ${this.saldo}`);
            
        } else {
            console.log("Retiro invalido");
            
        }
    }
}

const cuenta = new CuentaBancaria("Juan", 1000, "123456");
console.log(cuenta.titular);
//console.log(cuenta.saldo);      // Error: saldo es privado
console.log(cuenta.consultarSaldo());
cuenta.retirar(300);
cuenta.retirar(-40);



