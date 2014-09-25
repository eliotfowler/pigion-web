angular.module('pigionWebApp').directive('userUpload', function () {
    return {
        templateUrl: '/scripts/directives/userUpload/userUpload.html',
        restrict: 'E',
        scope: {
            'file': '=file'
        },
        controller: function($scope) {
        },
        link: function postLink(scope, element, attrs) {
        }
    };
});