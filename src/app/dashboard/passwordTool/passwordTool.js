angular.module('pigionWebApp.dashboard.passwordTool', [])
  .directive('passwordTool', function () {
    return {
      templateUrl: 'dashboard/passwordTool/passwordTool.tpl.html',
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