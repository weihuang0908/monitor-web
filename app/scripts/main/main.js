'use strict';

/**
 * @ngdoc function
 * @name parkProgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parkProgApp
 */
angular.module('parkProgApp').controller('MainCtrl', ['$scope', '$http', '$rootScope','tabFactory',
    function($scope, $http, $rootScope,tabFactory) {
        tabFactory.getJson('meau').then(function (resp) {
            $rootScope.meauList = resp.data;
            $rootScope.meauName = resp.data[0]["name"];
            $rootScope.submeau = resp.data[0]["submeau"][0];
        });

    }]);