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
    drop: function(event, draggableElement) {
      console.log("is acceptable test");

      console.log(draggableElement);

      var id = $(draggableElement.draggable).attr("id");

      if (id == "bfx-tool-text") {
        $(event.target).append("<p>Text</p>");
      } else if (id == "bfx-tool-header") {
        $(event.target).append("<h1>Header</h1>");
      }


      return true;
    }
  });
}

BfxEditorPanelController.$inject = ['$scope'];

function BfxEditorPanelController($scope) {




}