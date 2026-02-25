// Crear un módulo sin dependencias
var app = angular.module('miApp', []);

app.controller('miControlador', function($scope) {
    
    $scope.tareas = [
        'Estudiar Angular',
        'Hacer Ejercicio', 
        'Leer Libro',
        'Dormir 8 horas'
    ];
    $scope.totalTareas = $scope.tareas.length;
    $scope.nuevaTarea = '';
});