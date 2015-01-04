


(function () {
  'use strict';

  // Include Modules
  angular.module('eota', [
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate',

    'eota.controllers'
  ])

// Configure Router
  .config(['$routeProvider',
    function ($routeProvider) {
      // Provide routes for individual 'pages'
      $routeProvider
        .when('/', {
          templateUrl: 'templates/main.html'
        })
        .otherwise({
          redirectTo: '/'
        });
  }])


  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 70;   // always scroll by  extra pixels
  }]);

}());