
(function () {
  'use strict';

  angular.module('eota.main', [])

    .directive('mainView', function () {
      return {
        templateUrl: 'views/main.html',
        scope: {}
      }
    })


    .controller('MainCtrl', function ($scope) {
      $scope.title = 'Main';
    });


}());
