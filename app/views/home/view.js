'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $('body').append('<div id="toogle" class="loading fullscreen"><div class="spinner"></div></div>');
        $routeProvider.when('/home', {
            templateUrl: 'views/home/view.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {
        $('#toogle.loading.fullscreen').remove();
        $('html, body').animate({scrollTop:0}, 'fast');
        equalheight('*[data-pm-equalheight]');
        $('*[data-nav]').each(function(){
            $(this).parent().removeClass('active');
            if($(this).attr("data-nav")==='home') {
                $(this).parent().addClass('active');
            }
        });
    }])
    .controller('CardsController', function CardsController($scope, $http) {

        $scope.listOfCards = null;

        $http.get('json/home.json')
            .success(function (data) {
                $scope.listOfCards = data.GetAllCardsResult;
            })
            .error(function (data, status, headers, config) {
                $scope.errorMessage = "Couldn't load the list of cards, error # " + status;
            });

        $(window).trigger('resize');
    });