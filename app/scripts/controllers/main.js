'use strict';

/**
 * @ngdoc function
 * @name angnewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angnewsApp
 */
angular.module('angnewsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
