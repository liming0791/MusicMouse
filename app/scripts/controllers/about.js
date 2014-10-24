'use strict';

/**
 * @ngdoc function
 * @name myYoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myYoAppApp
 */
angular.module('myYoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
