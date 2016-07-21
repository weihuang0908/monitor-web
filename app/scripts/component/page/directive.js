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
    })
    .directive('fundLine', function() {
        return {
            restrict: 'AE',
            scope: {
                data: '=',
                xkey: '=',
                ykeys: '=',
                labels: '=',
                colors: '@'
            },
            link: function (scope, elem, attrs) {
                var colors;
                if (scope.colors === void 0 || scope.colors === '') {
                    colors = null;
                } else {
                    colors = JSON.parse(scope.lineColors);
                }
                scope.$watch('data', function () {
                    if (scope.data) {
                        if (!scope.morris) {
                            scope.morris = new Morris.Line({
                                element: elem,
                                data: scope.data,
                                xkey: scope.xkey,
                                ykeys: scope.ykeys,
                                ymin: "auto",
                                yLabelFormat:function(y){var num = new Number(y);return num.toFixed(4)},
                                labels: scope.labels,
                                colors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                            });
                        } else {
                            scope.morris.setData(scope.data);
                        }
                    }
                });
            }
        };
    })
    .directive('fundBar', function() {
        return {
            restrict: 'AE',
            scope: {
                data: '=',
                xkey: '=',
                ykeys: '=',
                labels: '=',
                colors: '@'
            },
            link: function (scope, elem, attrs) {
                var colors;
                if (scope.colors === void 0 || scope.colors === '') {
                    colors = null;
                } else {
                    colors = JSON.parse(scope.lineColors);
                }
                scope.$watch('data', function () {
                    if (scope.data) {
                        if (!scope.morris) {
                            scope.morris = new Morris.Bar({
                                element: elem,
                                data: scope.data,
                                xkey: scope.xkey,
                                ykeys: ['total'],
                                ymin: "auto",
                                yLabelFormat:function(y){var num = new Number(y);return num.toFixed(4)},
                                labels: ['total'],
                                colors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                            });
                        } else {
                            scope.morris.setData(scope.data);
                        }
                    }
                });
            }
        };
    });