/**
 * Created by weihuang on 15/7/23.
 */
angular.module('parkProgApp').controller('NavbarCtrl', ['$scope', '$http','$rootScope',
    function($scope, $http, $rootScope) {
        $scope.onClickMeau = function() {
            var $item = $('#sidebar-nav .dropdown-toggle').parent();
            if (!$item.hasClass('open')) {
                $item.parent().find('.open .submenu').slideUp('fast');
                $item.parent().find('.open').toggleClass('open');
            }
            $item.toggleClass('open');
            if ($item.hasClass('open')) {
                $item.children('.submenu').slideDown('fast');
            }
            else {
                $item.children('.submenu').slideUp('fast');
            }
        };
        $scope.onClickSubmeau = function(submeau){
            $rootScope.submeau = submeau;
        };
        $scope.isActive = function(name){
            return(name == $rootScope.submeau.name);
        };
    }]);