'use strict';

/* Filters */

angular.module('raw.filters', [])
.filter('interpolate', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
});

angular.module('raw.filters', [])
.filter('field_type_chn', function(field.type) {
    var ft_chn = {'NUMBER':'数字', 'STRING':'字符串'};
    return ft_chn[field.type];
});
