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
        'ngMorris',
        'ui.bootstrap',
        'sliceFilter'
    ])
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFail: 'auth-login-fail',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout'
    })
    .constant('USER_ROLES', {
        root: 'root',
        user: 'user'
    })
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
    })
    .run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'token ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
                if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });
        }]);
