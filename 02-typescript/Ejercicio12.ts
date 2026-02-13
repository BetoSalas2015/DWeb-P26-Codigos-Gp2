// Funciones callback con tipado
function procesarDatos(datos: number[], 
                       callback: (resultado: number) => void): void {
    let suma = datos.reduce( (total, num) => total + num, 0 );
    callback(suma);                   
}

procesarDatos([1,2,3,4,5,6,7,8,9], (resultado) => {
    console.log("La suma es " + resultado); 
});
