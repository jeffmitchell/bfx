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
    templateUrl: 'ui/editor/bfx-editor-panel.directive.html',
    link: editorLinkFunction,
    controller: BfxEditorPanelController
  };
  return directive;
};

function editorLinkFunction(scope, element, attrs) {

  //Here your view content is fully loaded !!
  $(".bfx-editor-panel").droppable({
    activeClass: 'blue',
    drop: function(event, ui) {
      console.log("is acceptable test");

      console.log(ui);

      return true;
    }
  });
}

BfxEditorPanelController.$inject = ['$scope'];

function BfxEditorPanelController($scope) {




}