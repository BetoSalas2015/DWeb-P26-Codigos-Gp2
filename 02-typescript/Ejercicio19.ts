//  Propiedades readonly
class Producto {
    readonly id: number;
    nombre: string;
    precio: number;

    constructor(id: number, nombre: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    actualizaPrecio(nuevoPrecio: number) : void {
        this.precio =  nuevoPrecio;
        // this.id = 123;              // Error: no se puede cambiar!
    }
}

const producto = new Producto(1, "Laptop", 1200);
console.log(producto.id);
producto.actualizaPrecio(1500);
console.log(producto.precio);

