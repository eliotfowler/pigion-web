'use strict';

angular.module('pigionWebApp')
    .controller('LoginCtrl', function ($scope, $location) {
        $scope.gotoDash = function() {
            $location.path('/dashboard');
        };
    });
