/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').controller('ParkReportCtrl', ['$scope', '$http', '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $http, $rootScope, tabFactory, queryFactory) {
        var fresh = function(){
            tabFactory.getJson($rootScope.submeau.id).then(function (resp) {
                $scope.tabMeta = resp.data;
                $scope.currentTab = $scope.tabMeta[0];
                $scope.query = tabFactory.getQueryOption($scope.currentTab);
            });
        };

//       第一次刷新
        fresh();
        $scope.query_result = {};
        $scope.show_entries_num = 10;

//        每次submeau变化时，执行刷新
        $scope.$watch('submeau',fresh);

        $scope.onClickTab = function(tab){
            $scope.currentTab = tab;
            $scope.query = tabFactory.getQueryOption($scope.currentTab);

        };
//        服务器交互
        $scope.onSubmit = function(){
            var url = $rootScope.submeau.id + $scope.currentTab.id;
            console.log($scope.query);
            queryFactory.sendQuery(url,$scope.query).then(function (resp) {
                $scope.query_result[url] = resp.data;
                console.log($scope.query_result);
            });
        };


        datepicker = function(){
            $('#datetimepicker').datetimepicker();
        };
        datepicker();
    }]);