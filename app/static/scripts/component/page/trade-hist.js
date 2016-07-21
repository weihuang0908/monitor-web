/**
 * Created by weihuang on 15/7/24.
 */
angular.module('parkProgApp').controller('TradeHistCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
        $scope.query_result = {};
        $scope.entries_options = [10,20,30];
        $scope.account_name = $rootScope.account_name_list[0];

        $scope.pager = {
            "index": 1,
            "pageSize":$scope.entries_options[0]
        };

        $scope.showPagination = function(totalNum){
            return totalNum>0;
        };

        $scope.onClickTab = function(tab){
            $scope.currentTab = tab;
            $scope.query = tabFactory.getQueryOption($scope.currentTab);


        };
//        服务器交互
        $scope.onSubmit = function(){
            console.log("onsubmit");
            var url = "trade-hist/";
            queryFactory.sendQuery(url+$scope.account_name).then(function (resp) {
                if (resp.data["ok"]==1){
                    $scope.query_result = resp.data["state"];
                    $scope.table = resp.data["table"];
                }else{
                    alert(resp.data["error"]);
                }
            });
        };
        $scope.onSubmit();
    }]);