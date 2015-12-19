angular
  .module('bfx-main-panel', [])
  .directive('bfxMainPanel', bfxMainPanelDirective);

function bfxMainPanelDirective() {

  var bfxMainPanelDirective = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/main/bfx-main-panel.directive.html',
    link: mainLinkFunction
  };
  return directive;
};

function mainLinkFunction(scope, element, attrs) {

}

