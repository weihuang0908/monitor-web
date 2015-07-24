/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').controller('ParkReportCtrl', ['$scope', '$http', '$rootScope', 'tabFactory',
    function ($scope, $http, $rootScope, tabFactory) {
        var fresh = function(){
            tabFactory.getTabs($rootScope.submeau.id).then(function (resp) {
                $scope.tabMeta = resp.data;
                $scope.currentTab = $scope.tabMeta[0];
            });
        };
//       第一次刷新
        fresh();
//        每次submeau变化时，执行刷新
        $scope.$watch('submeau',fresh);
    }]);