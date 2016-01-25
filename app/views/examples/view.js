'use strict';

angular.module('myApp.examples', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $('body').append('<div id="toogle" class="loading fullscreen"><div class="spinner"></div></div>');
        $routeProvider.when('/examples', {
            templateUrl: 'views/examples/view.html',
            controller: 'View4Ctrl'
        });
    }])

    .controller('View4Ctrl', [function() {
        $('#toogle.loading.fullscreen').remove();
        $('html, body').animate({scrollTop:0}, 'fast');
        $('*[data-nav]').each(function(){
            $(this).parent().removeClass('active');
            if($(this).attr("data-nav")==='examples') {
                $(this).parent().addClass('active');
            }
        });
    }]);