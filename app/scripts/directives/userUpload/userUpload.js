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
        },
        link: function postLink(scope, element, attrs) {
        }
    };
});