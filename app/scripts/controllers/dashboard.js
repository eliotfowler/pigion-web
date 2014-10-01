'use strict';

angular.module('pigionWebApp')
    .controller('DashboardCtrl', function ($scope, hotkeys, $upload, Restangular, UserService) {
        Restangular.configuration.defaultHeaders["X-Auth-Token"] = UserService.getUserToken();
        $scope.files = [];
        Restangular.all('files').getList().then(function(files) {

            for(var i = 0; i< files.length; i++) {
                var file = files[i];
                console.log('file', file);
                var actualFileNameStart = file.fileName.lastIndexOf('/')+1;
                var actualFileNameEnd = file.fileName.lastIndexOf('.');
                var actualFileNameSize = actualFileNameEnd - actualFileNameStart;
                file.name = file.fileName.substr(actualFileNameStart, actualFileNameSize);
                file.extension = file.fileName.substr(file.fileName.lastIndexOf('.')+1);
                file.password = false;
                file.size = file.contentSize;
                file.expirationDate = file.expirationTime;

                $scope.files.push(file);
            }
        });
//        $scope.files = [
//            {
//                name: 'Pigion',
//                extension: 'css',
//                numDownloads: 0,
//                maxDownloads: -1,
//                password: false,
//                expirationDate: '2014-09-30T13:30:00',
//                size: 28000,
//                newFile: false
//            },
//            {
//                name: 'Swift',
//                extension: 'png',
//                numDownloads: 5,
//                maxDownloads: 10,
//                password: true,
//                expirationDate: '2014-09-30T13:30:00',
//                size: 28000,
//                newFile: false
//            },
//            {
//                name: 'Pigion',
//                extension: 'css',
//                numDownloads: 1,
//                maxDownloads: 1,
//                password: false,
//                expirationDate: '2014-09-30T13:30:00',
//                size: 56000,
//                newFile: false
//            },
//            {
//                name: 'Saxon Whitetail blk white superstar',
//                extension: 'jpg',
//                numDownloads: 0,
//                maxDownloads: -1,
//                password: true,
//                expirationDate: '2014-09-30T13:30:00',
//                size: 82000,
//                newFile: false
//            }
//        ];

        function getSortFunction(fieldName) {
            return function(file1, file2) {
                return new Date(file1[fieldName]) > new Date(file2[fieldName]);
            }
        }

        $scope.files.sort(getSortFunction('expirationDate'));

        $scope.toggleCheatSheet = hotkeys.toggleCheatSheet;

        $scope.totalFileSize = 200;
        $scope.userAllTimeFiles = 32;

        var guid = (function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return function() {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            };
        })();

        $scope.onFileSelect = function($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                var newGuid = guid();
                var expDate = new Date();
                var numberOfDaysToAdd = 5;
                expDate.setDate(expDate.getDate() + numberOfDaysToAdd);
                var newFile = {
                    name: file.name.substr(0, file.name.lastIndexOf('.')),
                    extension: file.name.substr(file.name.lastIndexOf('.') + 1),
                    numDownloads: 0,
                    maxDownloads: -1,
                    password: false,
                    expirationDate: expDate.toISOString(),
                    size: file.size,
                    newFile: true,
                    guid: newGuid
                };

                $scope.files.unshift(newFile);
                $scope.upload = $upload.upload({
                    url: 'http://localhost:9000/files/upload', //upload.php script, node.js route, or servlet url
                    //method: 'POST' or 'PUT',
                    headers: {'X-Auth-Token': UserService.getUserToken()},
                    file: file
                }).progress(function (evt) {
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                    $scope.$broadcast('fileUploadPercent-' + newGuid, parseInt(100.0 * evt.loaded / evt.total));
                }).success(function (data, status, headers, config) {
                    // file is uploaded successfully
                    console.log(data);
                }).error(function (result) {
                    console.log('error', result);
                });
            }
        };
    });
