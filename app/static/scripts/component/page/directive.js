/**
 * Created by weihuang on 15/7/27.
 *
 *
 */
angular.module('parkProgApp').directive('queryForm',function(){
    return{
          restrict:'E',
          templateUrl:'views/component/template/query_options.html',
          replace:true,
          scope:true,
          controller:["$scope",function($scope){
          }],
          link:function(scope,element,attrs,controller){

          }

    };
});