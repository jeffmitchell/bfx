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

  //The helper controls the look of the cloned object
  //as it is being drug from the tool panel.
  var helper = function(event) {
    return $(event.currentTarget).clone().css({
      width: 100,
      height: 100
    });
  }

  $(element).draggable({
    helper: helper,
    cursor: 'move',
    revert: 'invalid',
    zIndex: 100
  });


}





