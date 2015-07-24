/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').factory('tabFactory',
    function ($http) {
        var baseUrl = "jsons/";
        var service = {};
        service.getTabs = function(id){
            return $http({
                method:'GET',
                url:baseUrl + id + '.json'
            }).success(function(resp){
                return resp;
            });
        };
        return service;
    });