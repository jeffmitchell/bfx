'use strict';

angular
  .module('bfx-editor-panel', [])
  .directive('bfxEditorPanel', bfxEditorPanelDirective);

function bfxEditorPanelDirective() {

  var directive = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/bfx-editor-panel.directive.html',
    link: linkFunction,
    controller: BfxEditorPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function linkFunction(scope, element, attrs) {

}

BfxEditorPanelController.$inject = ['$scope'];

function BfxEditorPanelController($scope) {

}