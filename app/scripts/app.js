


(function () {
  'use strict';

  // Include Modules
  angular.module('eota', [
    'ui.bootstrap',
    'ngRoute',

    'eota.controllers'
  ])

// Configure Router
  .config(['$routeProvider',
    function ($routeProvider) {
      // Provide routes for individual 'pages'
      $routeProvider
        .when('/home', {
          templateUrl: 'pages/home.html'
        })
        .when('/about', {
          templateUrl: 'pages/about.html'
        })
        .when('/shows', {
          templateUrl: 'pages/shows.html',
          controller: 'ShowCtrl'
        })
        .when('/sounds', {
          templateUrl: 'pages/sounds.html',
          controller: 'SoundCtrl'
        })
        .when('/video', {
          templateUrl: 'pages/video.html',
          controller: 'VideoCtrl'
        })
        .when('/contact', {
          templateUrl: 'pages/contact.html'
        })
        .otherwise({
          redirectTo: '/home'
        });
  }]);

}());