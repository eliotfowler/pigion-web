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
        'ngTouch',
        'angularMoment',
        'cfp.hotkeys'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
