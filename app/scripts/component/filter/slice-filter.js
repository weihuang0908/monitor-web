angular.module('sliceFilter', []).filter('paging', function () {
    return function (input, index, pageSize) {
        if (input){
            var begin = (index-1) * pageSize;
            return input.slice(begin, begin + pageSize);
        }
        else
            return [];
    };
});