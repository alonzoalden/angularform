angular.module('greeter', [])
.controller('AppCtrl', function() {
  this.kill = function() {
    console.log('asdfasfasfKILLER');
  };
})
.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'templates/app.html'
  }
});