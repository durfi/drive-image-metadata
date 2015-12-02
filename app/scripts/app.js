'use strict';

/**
 * @ngdoc overview
 * @name driveImgmetaApp
 * @description
 * # driveImgmetaApp
 *
 * Main module of the application.
 */
angular
  .module('driveImgmetaApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/drive', {
        templateUrl: 'views/drive.html',
        controller: 'DriveCtrl',
        controllerAs: 'drive'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
