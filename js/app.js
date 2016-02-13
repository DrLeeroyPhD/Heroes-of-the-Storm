var hots = angular.module('hots', []);
hots.controller('mainCtrl', function($scope, $http){
    $http.get('http://heroesjson.com/heroes.json')
        .success(function(data){
            $scope.heroes = data;
    });
});