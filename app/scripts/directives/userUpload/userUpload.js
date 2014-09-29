angular.module('pigionWebApp').directive('userUpload', function () {
    return {
        templateUrl: '/scripts/directives/userUpload/userUpload.html',
        restrict: 'E',
        scope: {
            'file': '=file'
        },
        controller: function($scope, $timeout) {
            $scope.date = new Date($scope.file.expirationDate);
            $scope.newFile = Math.random()<.5;

            $scope.counter =  !!$scope.newFile ? 0 : 100;
            $scope.doneUploading = !$scope.newFile;
            $scope.max = 100;

            $scope.countdown = function() {
                $timeout(function() {
                    $scope.dynamic = $scope.counter;
                    $scope.percentUploaded = $scope.dynamic;
                    $scope.counter++;
                    if($scope.dynamic < $scope.max) {
                        $scope.countdown();
                    } else {
                        console.log('here');
                        $scope.doneUploading = true;
                    }

                }, 1000);
            };

            $scope.countdown();

        },
        link: function postLink(scope, element, attrs) {
            if (attrs.newFile) {
                // Do stuff based on new file here
            }
        }
    };
});