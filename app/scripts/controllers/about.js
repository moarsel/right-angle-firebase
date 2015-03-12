'use strict';

/**
 * @ngdoc function
 * @name angnewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angnewsApp
 */
angular.module('angnewsApp')
    .controller('AboutCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });