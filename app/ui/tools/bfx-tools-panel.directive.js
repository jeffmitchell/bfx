angular
  .module('bfx-tools-panel', [])
  .directive('bfxToolsPanel', bfxToolsPanelDirective);

function bfxToolsPanelDirective() {

  var directive = {
    restrict: 'E',
    templateUrl: 'ui/tools/bfx-tools-panel.directive.html',
    link: toolsLinkFunction
  };
  return directive;
};

function toolsLinkFunction(scope, element, attrs) {
  console.log("break");
}


