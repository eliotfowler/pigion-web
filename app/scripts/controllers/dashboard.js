'use strict';

angular.module('pigionWebApp')

    .controller('DashboardCtrl', function ($scope) {
        $scope.files = [
            {
                name: 'Pigion',
                extension: 'css',
                numDownloads: 0,
                maxDownloads: -1,
                password: false,
                expirationDate: '2014-09-30T13:30:00',
                size: 28
            },
            {
                name: 'Swift',
                extension: 'png',
                numDownloads: 5,
                maxDownloads: 10,
                password: true,
                expirationDate: '2014-09-30T13:30:00',
                size: 28
            },
            {
                name: 'Pigion',
                extension: 'css',
                numDownloads: 1,
                maxDownloads: 1,
                password: true,
                expirationDate: '2014-09-30T13:30:00',
                size: 56
            },
            {
                name: 'Saxon Whitetail blk white superstar',
                extension: 'jpg',
                numDownloads: 0,
                maxDownloads: -1,
                password: true,
                expirationDate: '2014-09-30T13:30:00',
                size: 82
            }
        ];


        $scope.totalFileSize = 200;
        $scope.userAllTimeFiles = 32;
    });
