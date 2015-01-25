angular.module('services.userService', [])
  .service('UserService', function($cookieStore, Restangular, $q) {
    var userToken;

    this.saveUserToken = function saveUserToken(token) {
      userToken = token;
      $cookieStore.put('userToken', token);
    };

    this.getUserToken = function getUserToken() {
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

    this.isAuthenticated = function isAuthenticated() {
      var deferred = $q.defer();
      // Make a sample call and see if it returns true
      Restangular.configuration.defaultHeaders["X-Auth-Token"] = this.getUserToken();
      Restangular.all('files').getList().then(function() {
        deferred.resolve();
      }, function(){
        deferred.reject();
      });

      return deferred.promise;
    };

    this.login = function(username, password) {

    };

    this.getUserFilesInfo = function getUserFilesInfo() {
      var deferred = $q.defer();
      Restangular.all('users').one('filesInfo').get().then(function(data) {
        deferred.resolve(data);
      }, function(){
        deferred.reject();
      });

      return deferred.promise;
    };

    this.getUserInfo = function getUserInfo() {
      var deferred = $q.defer();
      Restangular.all('users').one('info').get().then(function(data) {
        deferred.resolve(data);
      }, function(){
        deferred.reject();
      });

      return deferred.promise;
    };

    this.signup = function signup(user) {
      var deferred = $q.defer();
      // Make the actual object
      var userToSend = {
        "userName": user.email,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "password": user.password
      };
      Restangular.all('auth').all('signupRemote').post(userToSend).then(function(data) {
        deferred.resolve(data);
      }, function() {
        deferred.reject();
      });
    };
  });