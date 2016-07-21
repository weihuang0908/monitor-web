
angular.module('parkProgApp').controller('SystemLogCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
        $scope.account_name = $rootScope.account_name_list[0];
        $scope.query= {"account_name":$scope.account_name};
        $scope.query_result = {};
        $scope.entries_options = [10,20,30];

        $scope.pager = {
            "index": 1,
            "pageSize":$scope.entries_options[0]
        };

        $scope.showPagination = function(totalNum){
            return totalNum>0;
        };

//        每次submeau变化时，执行刷新
//        $scope.$watch('submeau',fresh);

//        服务器交互
        $scope.onSubmit = function(){
            var url = "system-log/";
            console.log($scope.account_name);
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
        $scope.state_filter = function(str){
            if(str=="M"){
                return "label label-primary";
            }else if(str=="E"|| str=="F"){
                return "label label-danger";
            }else if(str=="d"){
                return "label label-success";
            }else if(str=="W"){
                return "label label-warning";
            }else{
                return "label label-default";
            }
        }
    }]);