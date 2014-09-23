'use strict';

/**
 * @ngdoc function
 * @name pigionWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pigionWebApp
 */
angular.module('pigionWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
