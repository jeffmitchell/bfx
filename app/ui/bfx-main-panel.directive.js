angular
  .module('bfx-main-panel', [])
  .directive('bfxMainPanel', bfxMainPanelDirective);

function bfxMainPanelDirective() {

  var bfxMainPanelDirective = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'ui/bfx-main-panel.directive.html',
    link: linkFunction,
    controller: BfxMainPanelController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function linkFunction(scope, element, attrs) {
  console.log(element);
  console.log('Link Scope: ' + scope);
}

BfxMainPanelController.$inject = ['$scope'];

function BfxMainPanelController($scope) {
  console.log('Controller Scope: ' + $scope);
}
