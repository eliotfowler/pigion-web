'use strict';

angular.module('pigionWebApp')
    .controller('LoginCtrl', function ($scope, Restangular, $location) {
        $scope.login = function login() {
            Restangular.all('auth').all('api').all('authenticate').all('userpass').post({
                username: $scope.username,
                password: $scope.password
            }).then(function(response) {
                console.log('response.token', response.token);
                Restangular.configuration.defaultHeaders["X-Auth-Token"] = response.token;
                $location.path("/dashboard");
            }, function(response) {
                console.log("There was an error saving", response);
            });
        };
    });
