'use strict';

angular
    .module('myApp.version', [
        'myApp.version.interpolate-filter',
        'myApp.version.version-directive'
    ])
    .value('version', '1.0.1');
//'ajsversion', '1.5.0-rc.1',