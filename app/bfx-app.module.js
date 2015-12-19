'use strict';

// Declare app level module which depends on views, and components
angular.module('bfx-app', [
  'ngRoute',
  'bfx-main-panel',
  'bfx-header-panel',
  'bfx-tools-panel',
  'bfx-editor-panel',
  'bfx-properties-panel',
  'bfx-footer-panel',
  'bfx-tool'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ui', {
      templateUrl: 'ui/main/bfx-main-panel.directive.html'
    });
  }])

.controller('bfxAppController', function($scope) {

});
