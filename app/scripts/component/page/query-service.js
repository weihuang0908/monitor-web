/**
 * Created by weihuang on 15/7/25.
 */
angular.module('parkProgApp').factory('queryFactory',
    function ($http,$location) {
        var baseUrl = "/stock_monitor/";
        var service = {};
        service.sendQuery = function(url,query){
            return $http({
                method : 'GET',
                url : baseUrl + url,
                params : query
            }).then(function successCallback(resp){
                return resp;
            }, function errorCallback(resp){
                if(resp.status==401){
                    $location.path("/login");
                    return resp;
                }
                return resp;
            });
        };
        return service;
    });