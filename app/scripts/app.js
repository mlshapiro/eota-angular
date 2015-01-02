


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
  }]);
//
//  .run(function($rootScope, $location, $anchorScroll, $routeParams) {
//    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//      $location.hash($routeParams.scrollTo);
//      $anchorScroll();
//    });
//  });

}());