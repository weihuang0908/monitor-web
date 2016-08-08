/**
 * Created by weihuang on 16/7/17.
 */

angular.module('parkProgApp').controller('PlotFundCtrl', ['$scope',
    '$rootScope', 'tabFactory','queryFactory',
    function ($scope, $rootScope, tabFactory, queryFactory) {
        $scope.tabMeta = [{"label":"按日","name":"date"},{"label":"按小时","name":"hour"}];
        $scope.currentTab = $scope.tabMeta[0];
        $scope.query = {};
        $scope.time1 = new Date();
        $scope.time2 = new Date();
        $scope.time1.setMonth($scope.time2.getMonth()-1);
        $scope.hour1 = new Date();
        $scope.hour2 = new Date();
        $scope.hour1.setDate($scope.time2.getDate()-1);
        $scope.onClickTab = function(tab){
            $scope.currentTab = tab;
            $scope.onSubmit();
        };
        $scope.onSubmit = function(){
            var url = "plot-fund/";
            if($scope.currentTab.name=="date"){
                console.log("date",$scope.time1);
                $scope.query = {"start":$scope.time1,"end":$scope.time2};
            }else{
                $scope.query = {"start":$scope.hour1,"end":$scope.hour2};
            }
            queryFactory.sendQuery(url+$scope.currentTab.name,$scope.query).then(function (resp) {
                if (resp.data["ok"]==1){
                    $scope.data = resp.data["data"];
                    $scope.total_data = resp.data["total_data"];
                    $scope.xkey = resp.data["xkey"];
                    $scope.ykeys = resp.data["ykeys"];
                    $scope.labels = resp.data["labels"];
                }else{
                    alert(resp.data["error"]);
                }

            });
        };
        $scope.onSubmit();
    }
]);

