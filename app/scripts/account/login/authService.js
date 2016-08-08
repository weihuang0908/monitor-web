/**
 * Created by weihuang on 15/8/5.
 */
angular.module('parkProgApp').factory('AuthService',
    function ($rootScope,$http,$cookieStore,$timeout,Session) {
        var service = {};
        service.login = function(credential){
            url = "/stock_monitor/login";
            return $http({
                method : 'POST',
                url : url,
                params : credential
            }).then(function(res){
                return res;
            });
        };
        service.isAuthenticated = function(){
            return !!Session.username;
        };
        service.isAuthorized = function(roles){
            if(!angular.isArray(roles)){
                roles = [roles];
            }
            return (service.isAuthenticated() && roles.indexOf(Session.userRole)!==-1);
        };
        service.SetCredentials = function (username, token) {
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: token
                }
            };
            $http.defaults.headers.common['Authorization'] = 'token ' + token; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'token ';
        };
        return service;
    });