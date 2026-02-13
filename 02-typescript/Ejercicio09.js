"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implementación real
function combinar(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else {
        return a + b;
    }
}
console.log(combinar("Saludos", "Programas!"));
console.log(combinar(3, 6));
