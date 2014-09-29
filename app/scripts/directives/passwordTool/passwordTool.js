angular.module('pigionWebApp').directive('passwordTool', function () {
    return {
        templateUrl: '/scripts/directives/passwordTool/passwordTool.html',
        restrict: 'E',
        scope: {
            'hasPassword': '=hasPassword'
        },
        controller: function($scope) {
            var numPasswordBubbles = 5;
            $scope.getNumPasswordBubbles = function() {
                return new Array(numPasswordBubbles);
            };
        },
        link: function postLink(scope, element, attrs) {
        }
    };
});