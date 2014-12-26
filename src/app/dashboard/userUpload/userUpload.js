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
        controller: function($scope, Restangular, $location) {
          $scope.flipped = false;
          $scope.date = new Date($scope.file.expirationDate);
          $scope.newFile = $scope.file.newFile;

          $scope.counter =  !!$scope.newFile ? 0 : 100;
          $scope.dynamic = $scope.counter;
          $scope.doneUploading = !$scope.newFile;
          $scope.max = 100;
          console.log('max is ' + $scope.max);

          if(!!$scope.newFile) {
              $scope.$on('fileUploadPercent-' + $scope.file.guid, function(event, data) {
                  $scope.dynamic = data;
                  if($scope.dynamic == 100) {
                      $scope.doneUploading = true;
                  }
              });

          }

          $scope.passwordClicked = function passwordClicked() {
            $scope.flipped = !$scope.flipped;
          };

          $scope.setPassword = function setPassword() {
            console.log('adding password');
            Restangular.all('files').customPUT( null, 'addPassword/' + $scope.file.id, {'password': $scope.password}, {});
          };

          $scope.fallback = function(copy) {
            window.prompt('Press cmd+c to copy the text below.', copy);
          };

          console.log($location.absUrl());
          console.log($scope.file);

          $scope.downloadPageUrl = 'test';
        },
        link: function postLink(scope, element, attrs) {
            if (attrs.newFile) {
                // Do stuff based on new file here
            }
        }
    };
});