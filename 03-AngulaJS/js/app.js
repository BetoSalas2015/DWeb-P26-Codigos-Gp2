// Crear un módulo sin dependencias
var app = angular.module('miApp', []);

app.controller('miControlador', function($scope) {
    
    $scope.tareas = [
        { tarea: 'Estudiar Angular', prioridad: 2 },
        { tarea: 'Hacer Ejercicio', prioridad: 1 },
        { tarea: 'Leer Libro', prioridad: 3 },
        { tarea: 'Dormir 8 horas', prioridad: 2 }
    ]

    $scope.nuevaTarea

    $scope.totalTareas = $scope.tareas.length;
    $scope.nuevaTarea = '';

    $scope.agregarTarea = () => {
        if($scope.nuevaTarea && $scope.nuevaPrioridad) {
            $scope.tareas.push( {
                tarea: $scope.nuevaTarea,
                prioridad: $scope.nuevaPrioridad
            } );
            $scope.totalTareas = $scope.tareas.length;
            $scope.nuevaTarea = '';
            $scope.nuevaPrioridad = '';
        } else {
            alert('Por favor llnear los dos campos')
        }
    };

    $scope.eliminarTarea = (index) => {
        $scope.tareas.splice(index, 1);
        $scope.totalTareas = $scope.tareas.length;
    };

});