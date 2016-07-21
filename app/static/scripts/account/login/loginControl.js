/**
 * Created by weihuang on 15/7/22.
 */
angular.module('parkProgApp').controller('LoginCtrl', ['$scope','AUTH_EVENTS', 'AuthService','$rootScope','$location',
    function($scope,AUTH_EVENTS,AuthService,$rootScope,$location) {
        $scope.credentials = {
            username:"",
            password:""
        };
        $scope.login = function(credential){
            AuthService.login(credential).then(
                function(resp){
                    data = resp.data;
                    if(data.ok==1){
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        AuthService.SetCredentials(data.username,data.token);
                        $location.path("/main");
                    }else{
                        alert("login failed");
                        $rootScope.$broadcast(AUTH_EVENTS.loginFail);
                    }
                },
                function(){
                    $rootScope.$broadcast(AUTH_EVENTS.loginFail);
                }
            );
        };
    }]);