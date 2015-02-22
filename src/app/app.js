angular.module('pigionWebApp', [
  'templates-app',
  'templates-common',
  'angularMoment',
  'cfp.hotkeys',
  'restangular',
  'angularFileUpload',
  'ngCookies',
  'ui.bootstrap',
  'pigionWebApp.signup',
  'pigionWebApp.landing',
  'pigionWebApp.login',
  'pigionWebApp.dashboard',
  'pigionWebApp.download',
  'ui.router',
  'interceptors.authHttpResponseInterceptor',
  'services.fileService',
  'ngClipboard'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider, $httpProvider ) {
    $urlRouterProvider.otherwise( '/' );
    $locationProvider.html5Mode(false);
    RestangularProvider.setBaseUrl('https://pigion.herokuapp.com');
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

  .config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("vendor/zeroclipboard/dist/ZeroClipboard.swf");
  }])

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | Pigion' ;
      }
    });
  });

