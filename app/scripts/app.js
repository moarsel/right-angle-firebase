(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name angnewsApp
     * @description
     * # angnewsApp
     *
     * Main module of the application.
     */
    angular
        .module('angnewsApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'firebase'
        ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/posts.html',
                    controller: 'PostsCtrl'
                })
                .when('/posts/:postId/', {
                    templateUrl: 'views/showpost.html',
                    controller: 'PostViewCtrl'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                })
                .when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'AuthCtrl',
                    // resolve: {
                        // user: function(Auth) {
                            // return Auth.resolveUser();
                        // }
                    // }
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

})();