/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').controller('ParkReportCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
        $scope.query_result = {};
        $scope.entries_options = [5,10,20,30];

        var fresh = function(){
            tabFactory.getJson($rootScope.submeau.id).then(function (resp) {
                $scope.tabMeta = resp.data;
                $scope.currentTab = $scope.tabMeta[0];
                $scope.query = tabFactory.getQueryOption($scope.currentTab);

            });
        };

//       第一次刷新
        fresh();
        $scope.pager = {
            "index": 1,
            "pageSize":$scope.entries_options[0]
        };

        $scope.showPagination = function(totalNum){
            return totalNum>0;
        };

//        每次submeau变化时，执行刷新
        $scope.$watch('submeau',fresh);

        $scope.onClickTab = function(tab){
            $scope.currentTab = tab;
            $scope.query = tabFactory.getQueryOption($scope.currentTab);

        };
//        服务器交互
        $scope.onSubmit = function(){
            var url = $rootScope.submeau.id + $scope.currentTab.id;
            queryFactory.sendQuery(url,$scope.query).then(function (resp) {
                $scope.query_result[url] = resp.data;
            });
        };

    }]);