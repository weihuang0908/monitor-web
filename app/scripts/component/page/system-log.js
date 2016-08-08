
angular.module('parkProgApp').controller('SystemLogCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
        $scope.account_name = $rootScope.account_name_list[0];
        $scope.query= {"account_name":$scope.account_name};
        $scope.query_result = {};
        $scope.entries_options = [20,30,50];
        $scope.checkbox = {
            "M":false,
            "E":true,
            "F":true,
            "D":false,
            "W":false
        };
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

//        每次submeau变化时，执行刷新
//        $scope.$watch('submeau',fresh);

//        服务器交互
        $scope.onSubmit = function(){
            var url = "system-log/" +$scope.account_name + "/"+ $scope.pager.skip + "/" + $scope.pager.pageSize;
            queryFactory.sendQuery(url,{"level":$scope.checkbox,"start":$scope.time1,"end":$scope.time2}).then(function (resp) {
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
        $scope.state_filter = function(str){
            if(str=="M"){
                return "label label-primary";
            }else if(str=="E"|| str=="F"){
                return "label label-danger";
            }else if(str=="D"){
                return "label label-success";
            }else if(str=="W"){
                return "label label-warning";
            }else{
                return "label label-default";
            }
        }
    }]);