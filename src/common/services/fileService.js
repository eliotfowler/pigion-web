angular.module('services.fileService', [])
  .service('FileService', function(Restangular, $q) {
    this.addPasswordToFile = function addPasswordToFile(file, password) {
      var deferred = $q.defer();
      Restangular.all('files').one('password').one(file.id).put({'password': password}).then(function() {
        console.log("Object saved OK");
        deferred.resolve();
      }, function() {
        console.log('err');
        deferred.reject();
      });
      return deferred;
    };
  });