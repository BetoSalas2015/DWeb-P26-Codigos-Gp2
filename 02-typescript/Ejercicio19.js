"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Propiedades readonly
class Producto {
    id;
    nombre;
    precio;
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    actualizaPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
        // this.id = 123;              // Error: no se puede cambiar!
    }
}
const producto = new Producto(1, "Laptop", 1200);
console.log(producto.id);
producto.actualizaPrecio(1500);
console.log(producto.precio);
