'use strict';

/**
 * @ngdoc function
 * @name parkProgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parkProgApp
 */
angular.module('parkProgApp').controller('MainCtrl', ['$scope', '$rootScope',
    '$routeParams','tabFactory','USER_ROLES','AuthService',
    function($scope, $rootScope,$routeParams,tabFactory,USER_ROLES,AuthService) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;


        $scope.userId= $rootScope.globals.currentUser.username ;

        tabFactory.getJson('meau').then(function (resp) {
            $rootScope.meauList = resp.data;
            $rootScope.meauName = resp.data[0]["name"];
            $rootScope.submeau = resp.data[0]["submeau"][0];
        });

    }]);