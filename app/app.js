'use strict';

// Declare app level module which depends on views, and components
angular.module('bfx-app', [
  'ngRoute',
  'bfx-app.editor'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/editor'});
}]);
