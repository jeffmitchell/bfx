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

}

BfxMainPanelController.$inject = ['$scope'];

function BfxMainPanelController($scope) {

}
