angular.module('greeter')
.directive('greetDisplay', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: './templates/greetDisplay.html'
  }
});