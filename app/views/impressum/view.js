'use strict';

angular.module('myApp.impressum', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $('body').append('<div id="toogle" class="loading fullscreen"><div class="spinner"></div></div>');
        $routeProvider.when('/impressum', {
            templateUrl: 'views/impressum/view.html',
            controller: 'View5Ctrl'
        });
    }])

    .controller('View5Ctrl', [function() {
        $('#toogle.loading.fullscreen').remove();
        $('html, body').animate({scrollTop:0}, 'fast');
        $('*[data-nav]').each(function(){
            $(this).parent().removeClass('active');
        });
    }]);