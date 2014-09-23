'use strict';

/**
 * @ngdoc function
 * @name pigionWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pigionWebApp
 */
angular.module('pigionWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
