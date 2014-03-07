'use strict';

/* Filters */

angular.module('raw.filters', [])
.filter('interpolate', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
});

//angular.module('raw.filters', [])
//.filter('field_type_chn', function(type_en) {
//    var ft_chn = {'NUMBER':'数字', 'STRING':'字符串'};
//    return ft_chn[type_en];
//});


raw.filter('field_type_chn', function() {
    return function(type_en) {
        var ft_chn = {'NUMBER':'数字', 'STRING':'字符串'};
        return ft_chn[type_en];
    }
})
