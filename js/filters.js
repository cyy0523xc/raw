'use strict';

/* Filters */

angular.module('raw.filters', [])
.filter('interpolate', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
});

angular.module('raw.filters', [])
.filter('field_type_chn', function() {
    var ft_chn = {'number':'数字', 'string':'字符串', 'boolean':'布尔值'};
    return function(type_en) {
        console.log(type_en);
        return ft_chn[type_en];
    }
});


//raw.filters('field_type_chn', function() {
//    return function(type_en) {
//        var ft_chn = {'NUMBER':'数字', 'STRING':'字符串'};
//        return ft_chn[type_en];
//    }
//})
