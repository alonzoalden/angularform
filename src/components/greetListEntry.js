angular.module('greeter')
.directive('greetListEntry', function() {
  return {
    scope: {
      user: '<',
      name: '<',
      phone: '<',
      comments: '<'
    },
    restrict: 'E',
    templateUrl: './templates/greetListEntry.html'
  }
});