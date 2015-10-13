'use strict';

angular
  .module('bfx-header-panel', [])
  .directive('bfxHeaderPanel', bfxHeaderPanelDirective);

function bfxHeaderPanelDirective() {

  var directive = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/bfx-header-panel.directive.html',
    link: linkFunction,
    controller: BfxHeaderPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function linkFunction(scope, element, attrs) {

}

BfxHeaderPanelController.$inject = ['$scope'];

function BfxHeaderPanelController($scope) {

}