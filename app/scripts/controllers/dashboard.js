'use strict';

angular.module('pigionWebApp')

    .controller('DashboardCtrl', function ($scope) {
        $scope.files = ['one', 'two', 'three', 'four'];
        $scope.totalFileSize = 200;
        $scope.userAllTimeFiles = 32;
    });
