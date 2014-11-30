angular.module(
  'pigionWebApp.dashboard', [
    'ui.router',
    'services.userService',
    'pigionWebApp.dashboard.userUpload',
    'pigionWebApp.dashboard.passwordTool',
    'bytes',
    'focusMe'
  ])


  .config(function config( $stateProvider ) {
    $stateProvider.state( 'dashboard', {
      url: '/dashboard',
      views: {
        "main": {
          controller: 'DashboardCtrl',
          templateUrl: 'dashboard/dashboard.tpl.html'
        }
      },
      data:{ pageTitle: 'Dashboard' }
    });
  })

  .controller( 'DashboardCtrl', function LoginCtrl( $scope, hotkeys, $upload, Restangular, UserService ) {
    Restangular.configuration.baseUrl = 'https://pigion.herokuapp.com';
    Restangular.configuration.defaultHeaders['X-Auth-Token'] = UserService.getUserToken();
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

    function getSortFunction(fieldName) {
      return function(file1, file2) {
        return new Date(file1[fieldName]) > new Date(file2[fieldName]);
      };
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
          url: 'https://pigion.herokuapp.com' + '/files/upload',
          //method: 'POST' or 'PUT',
          headers: {'X-Auth-Token': UserService.getUserToken()},
          file: file
        }).progress(function (evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total, 10));
          $scope.$broadcast('fileUploadPercent-' + newGuid, parseInt(100.0 * evt.loaded / evt.total, 10));
        }).success(function (data, status, headers, config) {
          // file is uploaded successfully
          console.log(data);
        }).error(function (result) {
          console.log('error', result);
        });
      }
    };
  });
