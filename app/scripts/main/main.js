'use strict';

/**
 * @ngdoc function
 * @name parkProgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parkProgApp
 */
angular.module('parkProgApp').controller('MainCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('jsons/meau.json').success(function(data) {
            $rootScope.meauList = data;
//            默认首页：meau.json的第一个子菜单
            $rootScope.submeau = data[0]["submeau"][0];
        });

    }]);