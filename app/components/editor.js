'use strict';

angular.module('bfx-app.editor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editor', {
    templateUrl: 'components/editor.html',
    controller: 'EditorCtrl'
  });
}])

.controller('EditorCtrl', [function() {

}]);
