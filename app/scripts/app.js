


(function () {
  'use strict';

  // Include Modules
  angular.module('eota', [
    'ui.bootstrap',
    'ngRoute',

    'eota.main',
    'eota.sounds',
    'eota.images'
  ])

// Configure Router
  .config(['$routeProvider',
  function ($routeProvider) {

    // Provide routes for individual 'pages'
    $routeProvider.
      when('/sounds', {
        templateUrl: 'views/sounds.html',
        controller: 'SoundCtrl'
      }).
      when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImageCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

}());