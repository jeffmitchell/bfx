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
    link: linkFunction
  };
  return directive;
};

function linkFunction(scope, element, attrs) {

}



