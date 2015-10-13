'use strict';

angular
  .module('bfx-footer-panel', [])
  .directive('bfxFooterPanel', bfxFooterPanelDirective);

function bfxFooterPanelDirective() {

  var directive = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/bfx-footer-panel.directive.html',
    link: linkFunction,
    controller: BfxFooterPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function linkFunction(scope, element, attrs) {

}

BfxFooterPanelController.$inject = ['$scope'];

function BfxFooterPanelController($scope) {

}