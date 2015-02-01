angular.module('pigionWebApp.dashboard.userUpload', [
  'ngClipboard'
])

    .directive('userUpload', function () {
    return {
        templateUrl: 'dashboard/userUpload/userUpload.tpl.html',
        restrict: 'E',
        scope: {
            'file': '=file'
        },
        controller: function($scope, Restangular, $location, $timeout, FileService) {
          $scope.flipped = false;
          $scope.date = new Date($scope.file.expirationDate);
          $scope.newFile = $scope.file.newFile;

          $scope.counter =  !!$scope.newFile ? 0 : 100;
          $scope.dynamic = $scope.counter;
          $scope.doneUploading = !$scope.newFile;
          $scope.max = 100;

          if(!!$scope.newFile) {
              $scope.$on('fileUploadPercent-' + $scope.file.guid, function(event, data) {
                  $scope.dynamic = data;
                  $scope.percentUploaded = data;
                  if($scope.dynamic == 100) {
                      $scope.doneUploading = true;
                  }
              });
          }

          if ($scope.file.contentType.indexOf('image') === 0) {
            $scope.imageType = true;
          }

          $scope.passwordClicked = function passwordClicked() {
            $scope.flipped = true;
            $timeout(function(){
              $scope.doneFlipping = true;
            }, 500);
          };

          $scope.passwordCancelled = function passwordCancelled() {
            $scope.doneFlipping = false;
            $scope.flipped = false;
          };

          $scope.passwordSaved = function passwordSaved() {
            FileService.addPasswordToFile($scope.file, $scope.password);
            $scope.doneFlipping = false;
            $scope.flipped = false;
          };

          $scope.setPassword = function setPassword() {
            console.log('adding password');
            Restangular.all('files').customPUT( null, 'addPassword/' + $scope.file.id, {'password': $scope.password}, {});
          };

          $scope.fallback = function(copy) {
            window.prompt('Press cmd+c to copy the text below.', copy);
          };

          var baseUrl = $location.absUrl().substr(0, $location.absUrl().lastIndexOf('/'));
          $scope.downloadPageUrl = baseUrl + '/' + $scope.file.shortUrlHash;
        },
        link: function postLink(scope, element, attrs) {
            if (attrs.newFile) {
                // Do stuff based on new file here
            }
        }
    };
});