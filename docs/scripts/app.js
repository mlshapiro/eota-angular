
(function () {
  'use strict';

  // Include Modules
  angular.module('eota', [
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate',

    'eota.controllers'
  ])

  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 70;   // always scroll by  extra pixels
  }]);

}());
