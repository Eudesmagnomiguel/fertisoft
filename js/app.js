var app = angular.module('agroCalc', []);

app.controller('calcAdubo', function($scope){
    $scope.options = ["N", "P", "K"];
    let hectarMetrosQuadrado = 10000;

    $scope.calcular = function (data) {
        $scope.valorNutricional =  ((data.recoNutriente * data.areaParcela) / hectarMetrosQuadrado);
        $scope.qtdeAduboParcela = (((data.doseAdubo * $scope.valorNutricional) / data.pctNutriente) * 1000);
    }

    $scope.limpar = function () {
        delete $scope.data;
        delete $scope.valorNutricional;
        delete $scope.qtdeAduboParcela;
    }
});