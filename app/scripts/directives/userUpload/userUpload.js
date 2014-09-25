angular.module('pigionWebApp').directive('userUpload', function () {
    return {
        templateUrl: '/scripts/directives/userUpload/userUpload.html',
        restrict: 'E',
        scope: {
            'file': '=file'
        },
        controller: function($scope) {
            var numPasswordBubbles = 5;
            $scope.getNumPasswordBubbles = function() {
                return new Array(numPasswordBubbles);
            }

            $scope.date = new Date($scope.file.expirationDate);
        },
        link: function postLink(scope, element, attrs) {
        }
    };
});