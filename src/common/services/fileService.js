angular.module('services.fileService', [])
  .service('FileService', function(Restangular, $q) {
    this.addPasswordToFile = function addPasswordToFile(file, password) {
      var deferred = $q.defer();
      Restangular.all('files').all('password').customPUT(null, '' + file.id, {'password': password}).then(function() {
        deferred.resolve();
      }, function(){
        deferred.reject();
      });
      return deferred.promise;
    };

    this.expireFile = function expireFile(file) {
      var deferred = $q.defer();
      Restangular.all('files').all(file.id).customPUT(null, 'expire', {}).then(function() {
        deferred.resolve();
      }, function(){
        deferred.reject();
      });
      return deferred.promise;
    };

    this.deleteFile = function deleteFile(file) {
      var deferred = $q.defer();
      Restangular.one('files', file.id).remove().then(function() {
        deferred.resolve();
      }, function(){
        deferred.reject();
      });
      return deferred.promise;
    };

  });