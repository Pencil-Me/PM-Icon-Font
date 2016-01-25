'use strict';

angular.module('myApp.icons', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $('body').append('<div id="toogle" class="loading fullscreen"><div class="spinner"></div></div>');
        $routeProvider.when('/icons', {
            templateUrl: 'views/icons/view.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', [function() {
        $('#toogle.loading.fullscreen').remove();
        $('html, body').animate({scrollTop:0}, 'fast');
        $('*[data-nav]').each(function(){
            $(this).parent().removeClass('active');
            if($(this).attr("data-nav")==='icons') {
                $(this).parent().addClass('active');
            }
        });
    }]);