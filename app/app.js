'use strict';
/*
 // angular.js main app initialization
 var app = angular.module('example359', []).
 config(['$routeProvider', function ($routeProvider) {
 $routeProvider.
 when('/', { templateUrl: 'views/home/view.html', activetab: 'projects', controller: HomeCtrl }).
 when('/project/:projectId', {
 templateUrl: function (params) { return 'pages/' + params.projectId + '.html'; },
 controller: ProjectCtrl,
 activetab: 'projects'
 }).
 when('/privacy', {
 templateUrl: 'views/howto/view.html',
 controller: PrivacyCtrl,
 activetab: 'privacy'
 }).
 when('/about', {
 templateUrl: 'views/icons/view.html',
 controller: AboutCtrl,
 activetab: 'about'
 }).
 otherwise({ redirectTo: '/' });
 }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
 $scope.$on("$routeChangeSuccess", function (scope, next, current) {
 $scope.part = $route.current.activetab;
 });
 // onclick event handlers
 $scope.showForm = function () {
 $('.contactRow').slideToggle();
 };
 $scope.closeForm = function () {
 $('.contactRow').slideUp();
 };
 // save the 'Contact Us' form
 $scope.save = function () {
 $scope.loaded = true;
 $scope.process = true;
 $http.post('sendemail.php', $scope.message).success(function () {
 $scope.success = true;
 $scope.process = false;
 });
 };
 }]);
 app.config(['$locationProvider', function($location) {
 $location.hashPrefix('!');
 }]);*/

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.howto',
    'myApp.icons',
    'myApp.examples',
    'myApp.impressum',
    'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
    $('body').append('<div id="toogle" class="loading fullscreen"><div class="spinner"></div></div>');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);