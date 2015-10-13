angular
  .module('bfx-tools-panel', [])
  .directive('bfxToolsPanel', bfxToolsPanelDirective);

function bfxToolsPanelDirective() {

  var directive = {
    restrict: 'E',
    templateUrl: 'ui/bfx-tools-panel.directive.html',
    link: linkFunction
  };
  return directive;
};

function linkFunction(scope, element, attrs) {
  console.log("break");
}


