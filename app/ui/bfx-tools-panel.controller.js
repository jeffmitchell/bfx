angular
  .module('bfx-tools-panel')
  .controller('bfxToolsPanelController', BfxToolsPanelController);

BfxToolsPanelController.$inject = ['$scope'];

function BfxToolsPanelController($scope) {
  console.log('Controller Scope: ' + $scope);

  $scope.test = "hubba bubba";
}