/**
 * Created by weihuang on 15/7/23.
 */
angular.module('parkProgApp').controller('NavbarCtrl', ['$scope', '$http','$rootScope',
    function($scope, $http, $rootScope) {
        $scope.onClickSubmeau = function(meauName,submeau){
            $rootScope.meauName = meauName;
            $rootScope.submeau = submeau;
        };
        $scope.isActive = function(name){
            return(name == $rootScope.submeau.name);
        };


    }]);