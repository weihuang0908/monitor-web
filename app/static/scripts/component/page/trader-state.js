
angular.module('parkProgApp').controller('TraderStateCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
//        init account_info: {"account_num": 5, "account_name": ["shipan1", "shipan0", "shipan3", "shipan2", "shipan4"]}
        $scope.query_result = [];
        $scope.entries_options = [5,10,20,30];
        $scope.timeStamp = "";
        $scope.pager = {
            "index": 1,
            "pageSize":$scope.entries_options[0]
        };

        $scope.showPagination = function(totalNum){
            return totalNum>0;
        };


//        服务器交互
        $scope.onFresh = function(){
            if( $rootScope.submeau.id=="trader-state" || $rootScope.submeau.id=="strategy-state"){
                if($rootScope.submeau.id=="trader-state"){
                    $scope.title = "交易程序状态"
                }else{
                    $scope.title = "策略程序状态"
                }
                var url = $rootScope.submeau.id;
                queryFactory.sendQuery(url).then(function (resp) {
                    if (resp.data["ok"]==1){
                        $scope.timeStamp = resp.data["time_stamp"];
                        $scope.query_result = resp.data["state"];
                        $scope.table =resp.data["table"];
                        $scope.col_num = resp.data["table"]["table_name"].length-1;
                    }else{
                        alert(resp.data["error"]);
                    }

                });
            }
        };

        $scope.$watch('submeau',$scope.onFresh);

        $scope.onFresh();
        $scope.state_filter = function(state){
            if(state=="R"||state=="1") {
                return "label label-success";
            }else if(state=="D"||state=="0"){
                return "label label-danger";
            }else if(state=="E"){
                return "label label-warning";
            }
        };
       $scope.get_filter_name = function(index){
           if(index==$scope.col_num){
               return "date_filter";
           }
           if($rootScope.submeau.id=="trader-state"){
               if(index==1){
                   return "state_filter";
               }
           }else if($rootScope.submeau.id=="strategy-state"){
               if(index==1||index==4||index==5){
                   return "state_filter";
               }
           }
           return "";
       };

       $scope.auto_fresh = function(){
           var now = new Date();
           var old = new Date($scope.timeStamp);
           if((now-old)>30000){
             onFresh();
           }
           setTimeout(auto_fresh,30000);
       }
    }]);