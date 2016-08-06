angular.module('myApp.controllers',[])
.controller('myController', ['$scope', 'networkService', function($scope, networkService){
    console.log("myController loaded...");

    $scope.loginData = null;

    $scope.submitLoginInfo = function(data){
        console.log(data);

        var dataPromiss = networkService.postLoginDataReq(data);
        dataPromiss.then(function(result){
            console.log("result is " +result);
        });
    }
}]);

