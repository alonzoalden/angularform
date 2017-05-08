angular.module('greeter', [])
.controller('AppCtrl', function($scope) {

  $scope.users = [{
    name: 'bob',
    phone: '(661) 582-9984',
    email: 'bob@gmail.com',
  },
  {
    name: 'bill',
    phone: '(661) 432-9865',
    email: 'bill@gmail.com'
  }];


  $scope.addNew = function(info) {
    $scope.users.push({
      name: info.name,
      phone: info.phone,
      email: info.email
    })
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

