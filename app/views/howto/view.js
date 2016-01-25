'use strict';

angular.module('myApp.howto', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $('body').append('<div id="toogle" class="loading fullscreen"><div class="spinner"></div></div>');
        $routeProvider.when('/howto', {
            templateUrl: 'views/howto/view.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', [function() {
        $('#toogle.loading.fullscreen').remove();
        $('html, body').animate({scrollTop:0}, 'fast');
        $('*[data-nav]').each(function(){
            $(this).parent().removeClass('active');
            if($(this).attr("data-nav")==='howto') {
                $(this).parent().addClass('active');
            }
        });
    }]);