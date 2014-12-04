angular.module('pigionWebApp', [
  'templates-app',
  'templates-common',
  'angularMoment',
  'cfp.hotkeys',
  'restangular',
  'angularFileUpload',
  'ngCookies',
  'ui.bootstrap',
  'pigionWebApp.landing',
  'pigionWebApp.login',
  'pigionWebApp.dashboard',
  'pigionWebApp.download',
  'ui.router'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider ) {
    $urlRouterProvider.otherwise( '/' );
    $locationProvider.html5Mode(false);
    RestangularProvider.setBaseUrl('https://pigion.herokuapp.com');
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

