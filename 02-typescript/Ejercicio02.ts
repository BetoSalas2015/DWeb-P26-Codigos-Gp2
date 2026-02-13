// Tipos de datos Typescript
// nombre: type
var nombre: string = "Roberto";
var edad: Number = 30;
var programador: Boolean = true;
var lenguajes: Array<String> = ["C", "Java", "Typescript", "C#"];
var pareja: [String, Number] = ["Edad", 30];

enum meses { Enero, Febrero, Marzo, Abril}
var calendario: meses = meses.Abril;

var nada: void = undefined;
var Null: null = null;
var Undefined: undefined = undefined;

var temporal: any = pareja;