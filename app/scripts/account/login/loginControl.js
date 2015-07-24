/**
 * Created by weihuang on 15/7/22.
 */
angular.module('parkProgApp').controller('LoginCtrl', ['$scope','$location', '$http','$window',
    function($scope, $location,$http,$window) {
        $scope.signIn = function(){
            $location.path("/main");
        };
    }]);