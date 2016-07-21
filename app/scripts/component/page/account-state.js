
angular.module('parkProgApp').controller('AccountStateCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
//        init account_info: {"account_num": 5, "account_name": ["shipan1", "shipan0", "shipan3", "shipan2", "shipan4"]}
        url = "account_info";
        $scope.query_result = [];
        $scope.entries_options = [5,10,20,30];
        $scope.query = {};

        var fresh = function(){
            tabFactory.getJson($rootScope.submeau.id).then(function (resp) {
                $scope.tabMeta = resp.data;
                $scope.currentTab = $scope.tabMeta[0];
                $scope.options = $scope.currentTab.query_option;
                var id = 0;
                for(var i in $scope.account_name){
                    $scope.tabMeta[0].query_option[0]["options"][id] = {"id":$scope.account_name[i],"label":$scope.account_name[i]};
                    $scope.tabMeta[1].query_option[0]["options"][id] = {"id":$scope.account_name[i],"label":$scope.account_name[i]};
                    id += 1;
                }
                $scope.query = tabFactory.getQueryOption($scope.currentTab);
                $scope.onSubmit();
            });
        };


        queryFactory.sendQuery(url,$scope.query).then(function(resp){
            if(resp.data){
                $scope.account_num = resp.data.account_num;
                $scope.account_name = resp.data.account_name;
                $rootScope.account_name_list = resp.data.account_name;
                fresh(); //       第一次刷新
            }
        });


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
            $scope.options = $scope.currentTab.query_option;
            $scope.onSubmit();
        };



//        服务器交互
        $scope.onSubmit = function(){
            var key = $scope.options[0].key;
            var account_name = $scope.query[key];// $scope.query["account_state"]
            if($scope.currentTab.id == 1){
                var url = "account_state/" + account_name;
                queryFactory.sendQuery(url).then(function (resp) {
                    if (resp.data["ok"]==1){
                        $scope.query_result = resp.data[key];
                    }else{
                        alert(resp.data["error"]);
                    }

                });
            }else{
                queryFactory.sendQuery("balance").then(function (resp) {
                    if (resp.data["ok"]==1){
                        $scope.query_result = resp.data["balance"];
                        $scope.table = resp.data["table"];
                    }else{
                        alert(resp.data["error"]);
                    }

                });
            }

        };

    }]);