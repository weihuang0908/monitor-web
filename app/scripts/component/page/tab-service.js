/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').factory('tabFactory',
    function ($http) {
        var baseUrl = "jsons/";
        var service = {};
        service.getJson = function(id){
            return $http({
                cache:'true',
                method:'GET',
                url:baseUrl + id + '.json'
            }).success(function(resp){
                return resp;
            });
        };
        parseDefault = function(option){
            if(option.type=='default_select'){
                if(option.default){
                    return option.options[option.default];
                }
                else{
                    return option.options[0];
                }

            }
            else return "";
        };
        service.getQueryOption = function(tab){
            options = tab.query_option;
            var query = new Array();
            for (var i=0;i<options.length;i++){
                if(options[i].type != 'group'){
                    var key_tmp = options[i].key;
                    query[key_tmp]=parseDefault(options[i]);
                }
                else{
                    for(var j=0;j<options[i].contents.length;j++){
                        var tmp = options[i].contents[j].key;
                        query[tmp]=parseDefault(options[i].contents[j]);
                    }
                }
            }
            return query;
        };

        return service;
    });