var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {
    $scope.myFunc = function()
    {
        $http.get("https://restcountries.eu/rest/v1/all")
            .then(function (response) {
                    response.data.sort(function (a, b) {
                        return parseFloat(b.population) - parseFloat(a.population);
                });

                response.data = response.data.slice(0, 19);
                $scope.names = response.data;
            });
    }

    $scope.deleteLast = function (){

        $scope.names.splice(($scope.names.length - 1),1);

    }
});