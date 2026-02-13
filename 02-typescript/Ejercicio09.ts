// Sobrecarga de Funciones
// Declaración de Sobrecarga
function combinar(a: string, b: string): string;
function combinar(a: number, b: number): number;

// Implementación real
function combinar(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    } else {
        return a + b;
    }
}

console.log(combinar("Saludos", "Programas!"));
console.log(combinar(3,6));