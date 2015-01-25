angular.module(
  'pigionWebApp.signup', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'signup', {
      url: '/signup',
      views: {
        "main": {
          controller: 'SignupCtrl',
          templateUrl: 'signup/signup.tpl.html'
        }
      },
      data:{ pageTitle: 'Sign Up' }
    });
  })

  .controller( 'SignupCtrl', function SignupCtrl( $scope, UserService ) {
    $scope.user = {};

    $scope.signup = function signup(user) {
      UserService.signup(user);
    };
  });