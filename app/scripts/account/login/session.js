/**
 * Created by weihuang on 15/8/5.
 */
angular.module('parkProgApp').service('Session',function(){
    this.create = function(username,token){
        this.username = username;
        this.token = token;
    };
});