angular
  .module('bfx-common-widgets', [])
  .directive('bfxWidget', bfxWidget);  

function bfxWidget() {
  console.log('test');
  var directive = {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'components/bfx-widget.directive.html',
    link: linkFunction,
    controller: WidgetController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
};

function linkFunction(scope, element, attrs) {
  console.log(element);
  console.log('Link Scope: ' + scope);
}

WidgetController.$inject = ['$scope'];

function WidgetController($scope) {
  console.log('Controller Scope: ' + $scope);
}

