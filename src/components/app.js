angular.module('greeter', [])
.controller('AppCtrl', function($timeout, $scope, dataFactory) {

  $scope.test = dataFactory.data;

  var initialize = function() {
      console.log('YOU MADE IT TO THE END');
  }

  $scope.$watch('test.example', function(newVal, oldVal) {
      if (newVal) {
        console.log('Data from service begins as undefined due to async behavior. We\'re using $watch to check for when this data is loaded so we can invoke initialize.');
        initialize();
      }
  })

  if ($scope.test.example) {
    console.log('Data from service has already been loaded and we can invoke initialize.');
    initialize();
  }


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
    dataFactory.get()
    .then(function (info) {
        $scope.test.hello = info;
        $scope.test.working = true;
        $scope.users.push({
            name: 'info.name',
            phone: 'info.phone',
            email: 'info.email'
        });
    });
  };


})
.factory('dataFactory', ['$http', '$q', '$timeout', function($http, $q, $timeout) {

    var dataFactory = {};

    dataFactory.data = {};
    dataFactory.data.example = undefined;

    dataFactory.get = function () {
        return $http.get('/api/contact')
              .then(function(response) {
                  $timeout(function() {
                      dataFactory.data.example = 'FINALE';
                      console.log(dataFactory.data.example)
                  }, 3000);
              });
    };

    dataFactory.get();
    return dataFactory;
}])
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

