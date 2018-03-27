
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
      $scope.isCollapsed = true;
      $http.get('../shows.json')
        .success(function(data) {
          sortShows(data.shows);
        });

      $scope.toggleCollapse = function() {
        $scope.isCollapsed = !$scope.isCollapsed;
      };

      function sortShows(shows) {
        $scope.newShows = [];
        $scope.oldShows = [];

        _.each(shows, function(show) {
          var date;
          try {
            date=show.date.split('.');
          } catch(e) {console.log(e);}
          
          var d = new Date(date[0], parseInt(date[1])-1, parseInt(date[2])+1);
          var today = new Date();

          if (d <= today) {
            $scope.oldShows.push(show);
          } else {
            $scope.newShows.push(show);
          }
        });

        $scope.oldShows = $scope.oldShows.reverse()
      }



    });


}());
