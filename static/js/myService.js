 angular.module('myApp.service',[])
.factory('networkService', [ '$http', function($http){

    var postLoginDataReq = function(data){
        return $http.post('http://192.168.2.7:8003/api/createUser', {data: data}).then(function(result){
            return result.data;
        })
    }
    return{
        postLoginDataReq: postLoginDataReq
    }
}]);

