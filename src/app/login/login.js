angular.module(
    'pigionWebApp.login', [
    'ui.router'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'login', {
        url: '/login',
        views: {
            "main": {
                controller: 'LoginCtrl',
                templateUrl: 'login/login.tpl.html'
            }
        },
        data:{ pageTitle: 'Login' }
    });
})

.controller( 'LoginCtrl', function LoginCtrl( $scope, Restangular, $location, UserService ) {
        $scope.login = function login() {
            Restangular.all('auth').all('api').all('authenticate').all('userpass').post({
                username: $scope.username,
                password: $scope.password
            }).then(function(response) {
                Restangular.configuration.defaultHeaders["X-Auth-Token"] = response.token;
                UserService.saveUserToken(response.token);
                $location.path("/dashboard");
            }, function(response) {
              if(response.data.error.toLowerCase() === 'invalid credentials') {
                $scope.errorText = 'Your username or password is incorrect';
              } else {
                $scope.errorText = response.data.error;
              }
            });
        };
});
