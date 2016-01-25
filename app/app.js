'use strict';

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
