angular.module('pigionWebApp.dashboard.userUpload', [])

    .directive('userUpload', function () {
    return {
        templateUrl: 'dashboard/userUpload/userUpload.tpl.html',
        restrict: 'E',
        scope: {
            'file': '=file'
        },
        controller: function($scope) {
            $scope.date = new Date($scope.file.expirationDate);
            $scope.newFile = $scope.file.newFile;

            $scope.counter =  !!$scope.newFile ? 0 : 100;
            $scope.dynamic = $scope.counter;
            $scope.doneUploading = !$scope.newFile;
            $scope.max = 100;

            if(!!$scope.newFile) {
                $scope.$on('fileUploadPercent-' + $scope.file.guid, function(event, data) {
                    $scope.dynamic = data;
                    if($scope.dynamic == 100) {
                        $scope.doneUploading = true;
                    }
                });

            }
        },
        link: function postLink(scope, element, attrs) {
            if (attrs.newFile) {
                // Do stuff based on new file here
            }
        }
    };
});