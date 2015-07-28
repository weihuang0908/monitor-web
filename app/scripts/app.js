'use strict';

/**
 * @ngdoc overview
 * @name parkProgApp
 * @description
 * # parkProgApp
 *
 * Main module of the application.
 */
angular
    .module('parkProgApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'sliceFilter'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main/main.html',
                controller: 'MainCtrl'
            }).
            when('/login', {
                templateUrl: 'views/account/login/login.html',
                controller: 'LoginCtrl'
            }).
            when('/registration', {
                templateUrl: 'views/account/login/registration.html',
                controller: 'LoginCtrl'
            }).
            when('/forgot-password', {
                templateUrl: 'views/account/login/forgot-password.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
