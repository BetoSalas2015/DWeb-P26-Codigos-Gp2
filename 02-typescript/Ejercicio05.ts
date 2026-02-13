// Parametros opcionales
function saludar(nombre: string, apellido?: string): string {
    if(apellido){
        return `Hola ${nombre} ${apellido}`;
        
    } else {
        return `Hola ${nombre}`;
    }
}

console.log(saludar("Roberto"));
console.log(saludar("Roberto", "Salazar"));
