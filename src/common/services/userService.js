angular.module('services.userService', [])
  .service('UserService', function($cookieStore, Restangular, $q) {
    var userToken;

    this.saveUserToken = function(token) {
      userToken = token;
      $cookieStore.put('userToken', token);
    };

    this.getUserToken = function () {
      if(userToken) {
        return userToken;
      } else {
        var cookieToken = $cookieStore.get('userToken');
        console.log('getting cookieToken ' + cookieToken);
        if(cookieToken) {
          return cookieToken;
        }
      }

      return '';
    };

    this.isAuthenticated = function() {
      var deferred = $q.defer();
      // Make a sample call and see if it returns true
      Restangular.configuration.baseUrl = 'https://pigion.herokuapp.com';
      Restangular.configuration.defaultHeaders["X-Auth-Token"] = this.getUserToken();
      Restangular.all('files').getList().then(function(files) {
        deferred.resolve();
      }, function(){
        deferred.reject();
      });

      return deferred.promise;
    };

    this.login = function(username, password) {

    };
  });