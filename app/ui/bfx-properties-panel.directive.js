angular
  .module('bfx-properties-panel', [])
  .directive('bfxPropertiesPanel', bfxPropertiesPanelDirective);

function bfxPropertiesPanelDirective() {

  var directive = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/bfx-properties-panel.directive.html',
    link: linkFunction,
    controller: BfxPropertiesPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function linkFunction(scope, element, attrs) {

}

BfxPropertiesPanelController.$inject = ['$scope'];

function BfxPropertiesPanelController($scope) {

}

