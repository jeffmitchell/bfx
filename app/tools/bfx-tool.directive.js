angular
  .module('bfx-tool', [])
  .directive('bfxTool', bfxTool);

function bfxTool() {

  var directive = {
    restrict: 'E',
    scope: {
      symbol: '=',
      size: '=',
      label: '='
    },
    templateUrl: 'tools/bfx-tool.directive.html',
    link: toolLinkFunction
  };
  return directive;
};

function toolLinkFunction(scope, element, attrs) {
  //TODO: Find why being called for every directive on page and not just bfx-tool

    $(element).draggable({
      helper: 'clone',
      cursor: 'move',
      revert: 'invalid'
    });

}





