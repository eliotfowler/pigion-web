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
        'config',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angularMoment',
        'cfp.hotkeys',
        'restangular',
        'angularFileUpload',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/landing.html',
                controller: 'LandingCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/:hashKey', {
                templateUrl: 'views/download.html',
                controller: 'DownloadCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
