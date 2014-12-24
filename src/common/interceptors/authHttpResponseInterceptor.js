angular.module('interceptors.authHttpResponseInterceptor', [])
  .factory('authHttpResponseInterceptor',['$q','$injector',function($q,$injector){
    return {
      response: function(response){
        if (response.status === 401) {
          console.log("Response 401");
        }
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        if (rejection.status === 401) {
          console.log("Response Error 401",rejection);
          var stateService = $injector.get('$state');
          stateService.go('login');
        }
        return $q.reject(rejection);
      }
    };
  }]);