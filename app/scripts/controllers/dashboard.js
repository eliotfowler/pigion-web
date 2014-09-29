'use strict';

angular.module('pigionWebApp')

    .controller('DashboardCtrl', function ($scope, hotkeys, $upload) {
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
                password: false,
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

        $scope.toggleCheatSheet = hotkeys.toggleCheatSheet;

        $scope.totalFileSize = 200;
        $scope.userAllTimeFiles = 32;

        $scope.onFileSelect = function($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                console.log(file);
//                $scope.upload = $upload.upload({
//                    url: 'server/upload/url', //upload.php script, node.js route, or servlet url
//                    //method: 'POST' or 'PUT',
//                    //headers: {'header-key': 'header-value'},
//                    //withCredentials: true,
//                    data: {myObj: $scope.myModelObj},
//                    file: file, // or list of files ($files) for html5 only
//                    //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
//                    // customize file formData name ('Content-Disposition'), server side file variable name.
//                    //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
//                    // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
//                    //formDataAppender: function(formData, key, val){}
//                }).progress(function(evt) {
//                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
//                }).success(function(data, status, headers, config) {
//                    // file is uploaded successfully
//                    console.log(data);
//                });
                //.error(...)
                //.then(success, error, progress);
                // access or attach event listeners to the underlying XMLHttpRequest.
                //.xhr(function(xhr){xhr.upload.addEventListener(...)})
            }
            /* alternative way of uploading, send the file binary with the file's content-type.
             Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
             It could also be used to monitor the progress of a normal http post/put request with large data*/
            // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
        };
    });
