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
    templateUrl: 'ui/footer/bfx-footer-panel.directive.html',
    link: footerLinkFunction,
    controller: BfxFooterPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function footerLinkFunction(scope, element, attrs) {
  console.log("footer");
}

BfxFooterPanelController.$inject = ['$scope'];

function BfxFooterPanelController($scope) {

}