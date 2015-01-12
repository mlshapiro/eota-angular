
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
            console.log('success');
            _.each(data.images, function(image) {
              $scope.slides.push({
                image: path + image
              });
            })
      });

      //var images = [
      //    'ava.jpg',
      //    //'ava2.jpg',
      //    'eota.jpg',
      //    'wedding.jpg',
      //    'penny.jpg',
      //    'penny-cotton.jpg'
      //];



    })



    .controller('ShowCtrl', function ($scope) {
      var shows = [
        ['2.05.15', 'The Lyme Inn', '6-8:30 pm', 'Lyme, NH'],
        ['2.07.15', 'Big Fattys BBQ', '6-8 pm', 'White River Jct., VT', 'http://www.maplestreetcatering.com/piggery.html'],
        ['2.27.15', 'Big Fattys BBQ', '6-8 pm', 'White River Jct., VT', 'http://www.maplestreetcatering.com/piggery.html'],
        ['3.05.15', 'AVA Gallery', '6-8 pm', 'Lebanon, NH'],
        ['3.13.15', 'Riverwalk Cafe', '8 pm', 'Nashua, NH'],
        ['7.24.15', 'Private Event', '', 'Sunapee, NH']
      ];

      $scope.shows = [];
      _.each(shows, function(show) {
        $scope.shows.push({
          date: show[0],
          venue: show[1],
          time: show[2],
          location: show[3],
          venueSite: show[4]
        })
      })
    })


    .controller('SoundCtrl', function ($scope) {


    })

    .controller('VideoCtrl', function ($scope) {


    })



}());
