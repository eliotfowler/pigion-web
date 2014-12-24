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
  'ui.router',
  'interceptors.authHttpResponseInterceptor'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider, $httpProvider ) {
    $urlRouterProvider.otherwise( '/' );
    $locationProvider.html5Mode(false);
    RestangularProvider.setBaseUrl('http://localhost:9000');
  })

  .run(function ($rootScope, $state, UserService) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
      if (toState.authenticate && !UserService.isAuthenticated()) {
        // User isn’t authenticated
        $state.transitionTo("login");
        event.preventDefault();
      }
    });
  })

  .config(['$httpProvider',function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
  }])

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | Pigion' ;
      }
    });
  });

