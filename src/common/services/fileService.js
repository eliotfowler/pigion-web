angular.module('services.fileService', [])
  .service('FileService', function(Restangular, $q) {
    this.addPasswordToFile = function addPasswordToFile(file, password) {
      console.log('fileid' + file.id);
      console.log('pass', password);
      var deferred = $q.defer();
//      Restangular.all('files').all('password').put('password',password).then(function() {
//        console.log("Object saved OK");
//        deferred.resolve();
//      }, function() {
//        console.log('err');
//        deferred.reject();
//      });
      Restangular.all('files').all('password').customPUT(null, '' + file.id, {'password': password}).then(function() {
        deferred.resolve();
      }, function(){
        deferred.reject();
      });
      return deferred.promise;
    };
  });