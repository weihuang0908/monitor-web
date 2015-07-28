/**
 * Created by weihuang on 15/7/27.
 */
angular.module('parkProgApp').factory('pagerFactory',function() {
    var pagerService = {};
    pagerService.show =function (pager) {
        return pager.pageNum>0;
    };
    pagerService.setPageNum = function (pager,records_len) {
        pager.pageNum = Math.ceil(records_len / pager.pageSize);
        return pager;
    };
    pagerService.lastPage = function (pager) {
        if (pager.index - 1 >= 0) {
            pager.index = pager.index - 1;
        }
        return pager;
    };
    pagerService.nextPage = function (pager) {
        if (pager.index + 1 < pager.pageNum) {
            pager.index = pager.index + 1;
        }
        return pager;
    };
    pagerService.gotoPage = function(pager,page){
        if(page>0 && page<pageNum){
            pager.currentPage = page;
        }
        return pager;

    };
    return pagerService;
});