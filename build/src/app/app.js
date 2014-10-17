angular.module('pigionWebApp', [
  'templates-app',
  'templates-common',
  'angularMoment',
  'cfp.hotkeys',
  'restangular',
  'angularFileUpload',
  'ngCookies',
  'pigionWebApp.landing',
  'pigionWebApp.login',
  'pigionWebApp.dashboard',
  'ui.router'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.otherwise( '/' );
    $locationProvider.html5Mode(true);
  })

  .run( function run () {

  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | Pigion' ;
      }
    });
  });

