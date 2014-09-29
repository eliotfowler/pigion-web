'use strict';

angular.module('pigionWebApp')
    .service('UserService', function($cookieStore) {
        var userToken;

        this.saveUserToken = function(token) {
            userToken = token;
            $cookieStore.put('userToken', token);
        }

        this.getUserToken = function () {
            if(userToken) {
                return userToken;
            } else {
                var cookieToken = $cookieStore.get('userToken');
                if(cookieToken) {
                    return cookieToken;
                }
            }

            return '';
        }
    });