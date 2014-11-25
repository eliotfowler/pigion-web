angular.module(
  'pigionWebApp.download', [
    'ui.router',
    'bytes'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'download', {
      url: '/:shortUrlKey',
      views: {
        "main": {
          controller: 'DownloadCtrl',
          templateUrl: 'download/download.tpl.html'
        }
      },
      data:{ pageTitle: 'Download' },
      resolve: {
        fileInfo: function(Restangular, $stateParams, $state) {
          return Restangular.one('key', $stateParams.shortUrlKey).get().then(function(fileInfo) {
            return fileInfo;
          }, function(err) {
            $state.go('landing');
          });
        }
      }
    });
  })

  .controller( 'DownloadCtrl', function LoginCtrl( $scope, Restangular, fileInfo ) {
    if (typeof String.prototype.startsWith != 'function') {
      // see below for better implementation!
      String.prototype.startsWith = function (str){
        return this.indexOf(str) === 0;
      };
    }

    $scope.fileInfo = fileInfo;
    $scope.isImage = fileInfo.contentType.startsWith('image');

    var actualFileNameStart = fileInfo.fileName.lastIndexOf('/')+1;
    var actualFileNameEnd = fileInfo.fileName.lastIndexOf('.');
    var actualFileNameSize = actualFileNameEnd - actualFileNameStart;
    $scope.fileName = fileInfo.fileName.substr(actualFileNameStart, actualFileNameSize);
    $scope.fileExtension = fileInfo.fileName.substr(fileInfo.fileName.lastIndexOf('.')+1);

    console.log('fileInfo', fileInfo);

    $scope.downloadUrl = "http://localhost:9000/download/" + fileInfo.shortUrlHash + "/" +
      fileInfo.fileName.substr(actualFileNameStart);
  });
