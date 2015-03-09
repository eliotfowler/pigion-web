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
      authenticate: true,
      views: {
        "main": {
          controller: 'DashboardCtrl',
          templateUrl: 'dashboard/dashboard.tpl.html'
        }
      },
      data:{ pageTitle: 'Dashboard' },
      resolve: {
        userFilesInfo: function(UserService){
          return UserService.getUserFilesInfo();
        },

        userInfo: function(UserService){
          return UserService.getUserInfo();
        }
      }
    });
  })

  .controller( 'DashboardCtrl', function LoginCtrl( $scope, hotkeys, $upload, Restangular, UserService, userInfo, userFilesInfo ) {
    Restangular.configuration.defaultHeaders['X-Auth-Token'] = UserService.getUserToken();
    $scope.files = [];

    $scope.user = userInfo;
    $scope.userFileInfo = userFilesInfo;

    $scope.selectedIndex = -1;

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

      $scope.files.sort(function(a,b){
        return a.id > b.id ? 1 : -1;
      });
    });

    function getSortFunction(fieldName) {
      return function(file1, file2) {
        return new Date(file1[fieldName]) > new Date(file2[fieldName]);
      };
    }

    $scope.files.sort(getSortFunction('expirationDate'));

    $scope.toggleCheatSheet = hotkeys.toggleCheatSheet;
    hotkeys.bindTo($scope)
      .add({
        combo: 'down',
        description: 'Move to the next uploaded file',
        callback: function() {
          $scope.selectedIndex = Math.min($scope.selectedIndex + 1, $scope.files.length-1);
        }
      }).add({
        combo: 'up',
        description: 'Move to the previous uploaded file',
        callback: function() {
          $scope.selectedIndex = Math.max($scope.selectedIndex - 1, 0);
        }
      });

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
          url: Restangular.configuration.baseUrl + '/files/upload',
          //method: 'POST' or 'PUT',
          headers: {'X-Auth-Token': UserService.getUserToken()},
          file: file
        }).progress(function (evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total, 10));
          $scope.$broadcast('fileUploadPercent-' + newGuid, parseInt(100.0 * evt.loaded / evt.total, 10));
        }).success(function (data, status, headers, config) {
          // file is uploaded successfully
          console.log("data", data);
          // Modify the file object
          for(var i=0; i<$scope.files.length; i++) {
            var currentFile = $scope.files[i];
            if(currentFile.guid === newGuid) {
              currentFile.expirationDate = data.expirationTime;
              currentFile.id = data.id;
              $scope.files[i] = currentFile;
              break;
            }
          }
          $scope.$apply();
        }).error(function (result) {
          console.log('error', result);
        });
      }
    };
  });
