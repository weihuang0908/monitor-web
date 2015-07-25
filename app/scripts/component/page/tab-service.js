/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').factory('tabFactory',
    function ($http) {
        var baseUrl = "jsons/";
        var service = {};
        service.getJson = function(id){
            return $http({
                method:'GET',
                url:baseUrl + id + '.json'
            }).success(function(resp){
                return resp;
            });
        };
        service.getQueryOption = function(tab){
            options = tab.query_option;
        };
        return service;
    });