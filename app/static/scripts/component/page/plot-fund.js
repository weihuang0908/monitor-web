/**
 * Created by weihuang on 16/7/17.
 */

angular.module('parkProgApp').controller('PlotFundCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
        $scope.tabMeta = [{"name":"hour"},{"name":"date"}];
        $scope.currentTab = $scope.tabMeta[0];

    }
]);

