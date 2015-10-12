angular
  .module('bfx-tools-panel', [])
  .directive('bfxToolsPanel', bfxToolsPanelDirective);

function bfxToolsPanelDirective() {

  var directive = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/bfx-tools-panel.directive.html',
    link: linkFunction,
    controller: BfxToolsPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function linkFunction(scope, element, attrs) {
  console.log(element);
  console.log('Link Scope: ' + scope);
}

BfxToolsPanelController.$inject = ['$scope'];

function BfxToolsPanelController($scope) {
  console.log('Controller Scope: ' + $scope);
}

