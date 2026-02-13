//  Funciones con tipos de retorno complejos
function obtenerDatosUsuario(id: number): {nombre: string, edad: number } {
    return {
        nombre: 'Roberto',
        edad: 40
    }
}

let usuario = obtenerDatosUsuario(1);
console.log(usuario);
