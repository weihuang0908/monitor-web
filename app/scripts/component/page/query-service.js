/**
 * Created by weihuang on 15/7/25.
 */
angular.module('parkProgApp').factory('queryFactory',
    function ($http) {
        var baseUrl = "jsons/test/";
        var service = {};
        service.sendQuery = function(url,query){
            url = url + ".json";
            return $http({
                method : 'GET',
                url : baseUrl + url,
                params : query
            }).success(function(resp){
                return resp;
            });
        };
        return service;
    });