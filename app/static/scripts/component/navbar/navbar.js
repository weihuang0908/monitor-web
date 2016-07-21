/**
 * Created by weihuang on 15/7/23.
 */
angular.module('parkProgApp').controller('NavbarCtrl', ['$scope', 'AuthService','$rootScope','$timeout',
    function($scope, AuthService, $rootScope,$timeout) {
        $scope.onClickSubmeau = function(meauName,submeau){
            $rootScope.meauName = meauName;
            $rootScope.submeau = submeau;
        };
        $scope.isActive = function(name){
            return(name == $rootScope.submeau.name);
        };

        $scope.clock = "loading clock..."; // initialise the time variable
        $scope.tickInterval = 1000; //ms
        var tick = function() {
            $scope.clock = Date.now();// get the current time
            $timeout(tick, $scope.tickInterval); // reset the timer
        };
        $scope.logout = function(){
            AuthService.ClearCredentials();
        };
        // Start the timer
        $timeout(tick, $scope.tickInterval);

    }]);