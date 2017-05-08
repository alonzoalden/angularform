angular.module('greeter')
.directive('appForm', function() {
  return {
    scope: {
      new: '=',
      name: '=',
      phoneNumber: '=',
      email: '=',
      comment: '=',
      addnew: '='
    },
    restrict: 'E',
    templateUrl: 'templates/form.html'

  }
});