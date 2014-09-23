'use strict';

/**
 * @ngdoc overview
 * @name pigionWebApp
 * @description
 * # pigionWebApp
 *
 * Main module of the application.
 */
angular
    .module('pigionWebApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
