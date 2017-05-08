angular.module('greeter')
.directive('greetDisplay', function() {
  return {
    scope: {
      name: '<',
      phone: '<',
      comments: '<'
    },
    restrict: 'E',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: './templates/greetDisplay.html'
  }
});