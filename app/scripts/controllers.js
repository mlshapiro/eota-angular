
(function () {
'use strict';

  angular.module('eota.controllers', [])

    .controller('MainCtrl', function ($scope, $location) {

      // Navbar control
      $scope.navbarCollapsed = true;

      $scope.pageActive = function() {
        return $location.hash();
      }

    })

    .controller('AboutCtrl', function ($scope, $http) {

      // Slider Control
      $scope.interval = 5000;
      $scope.slides = [];
      var path = '../res/img/';

      $http.get('../images.json')
          .success(function(data) {
            _.each(data.images, function(image) {
              $scope.slides.push({
                image: path + image
              });
            })
      });

    })

    .controller('ShowCtrl', function ($scope, $http) {

      $scope.shows =[];
      $http.get('../shows.json')
          .success(function(data) {
            $scope.shows = data.shows;
          });
    });

    // .controller('VideoCtrl', function($scope, $http, $sce) {
    //   $scope.videos =[];
    //   var trusted = [];

    //   $http.get('../videos.json')
    //       .success(function(data) {
    //         _.each(data.videos, function(video) {
    //           $scope.videos.push($sce.trustAsResourceUrl(video.src));
    //           // $sce.trustAsResourceUrl(video.src)
    //         });
    //         console.log($scope.videos)
    //         $scope.videos = data.videos;
    //       });
    // })


}());
