angular
  .module('bfx-properties-panel', [])
  .directive('bfxPropertiesPanel', bfxPropertiesPanelDirective);

function bfxPropertiesPanelDirective() {

  var directive = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/properties/bfx-properties-panel.directive.html',
    link: propertiesLinkFunction
  };
  return directive;
};

function propertiesLinkFunction(scope, element, attrs) {

}

BfxPropertiesPanelController.$inject = ['$scope'];

function BfxPropertiesPanelController($scope) {

}

