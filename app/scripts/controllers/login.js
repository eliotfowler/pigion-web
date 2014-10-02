'use strict';

angular.module('pigionWebApp')
    .controller('LoginCtrl', function ($scope, Restangular, $location, UserService, ENV) {
        Restangular.configuration.baseUrl = ENV.apiEndpoint;

        $scope.login = function login() {
            Restangular.all('auth').all('api').all('authenticate').all('userpass').post({
                username: $scope.username,
                password: $scope.password
            }).then(function(response) {
                Restangular.configuration.defaultHeaders["X-Auth-Token"] = response.token;
                UserService.saveUserToken(response.token);
                $location.path("/dashboard");
            }, function(response) {
                console.log("There was an error saving", response);
            });
        };
    });
