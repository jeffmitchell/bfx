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
    templateUrl: 'ui/header/bfx-header-panel.directive.html',
    link: headerLinkFunction,
    controller: BfxHeaderPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function headerLinkFunction(scope, element, attrs) {

}

BfxHeaderPanelController.$inject = ['$scope'];

function BfxHeaderPanelController($scope) {

}