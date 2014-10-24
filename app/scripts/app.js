'use strict';

/**
 * @ngdoc overview
 * @name myYoAppApp
 * @description
 * # myYoAppApp
 *
 * Main module of the application.
 */
angular
  .module('myYoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CategryCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/categry/:categryId',{
        templateUrl: 'views/categry.html',
        controller: 'SongCtrl'
      })
      .when('/:categryId/:songId',{
        templateUrl: 'views/song.html',
        controller: 'SongCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'CategryctrlCtrl'
      })
      .when('/SongCtrl', {
        templateUrl: 'views/songctrl.html',
        controller: 'SongctrlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
