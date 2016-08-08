/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').controller('TradeHistCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
        $scope.query_result = {};
        $scope.entries_options = [10,20,30];
        $scope.account_name = $rootScope.account_name_list[0];
        $scope.time1 = new Date();
        $scope.time2 = new Date();
        $scope.time1.setMonth($scope.time2.getMonth()-1);
        $scope.pager = {
            "index": 1,
            "pageSize":$scope.entries_options[0],
            "skip": 0
        };

        $scope.showPagination = function(totalNum){
            return totalNum>0;
        };
        $scope.changePage = function(){
            console.log("changepage");
            $scope.pager.skip = ($scope.pager.index - 1) *  $scope.pager.pageSize;
            $scope.onSubmit();
        };
        $scope.onClickTab = function(tab){
            $scope.currentTab = tab;
            $scope.query = tabFactory.getQueryOption($scope.currentTab);


        };
//        服务器交互
        $scope.onSubmit = function(){
            var url = "trade-hist/" +$scope.account_name + "/"+ $scope.pager.skip + "/" + $scope.pager.pageSize;
            queryFactory.sendQuery(url,{"start":$scope.time1,"end":$scope.time2}).then(function (resp) {
                if (resp.data["ok"]==1){
                    $scope.query_result = resp.data["data"];
                    $scope.table = resp.data["table"];
                    $scope.total_count = resp.data["count"];
                }else{
                    alert(resp.data["error"]);
                }
            });
        };
        $scope.onSubmit();
    }]);