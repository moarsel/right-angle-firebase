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
                    controller: 'PostsCtrl',
                })
                .when('/posts/:postId/', {
                    templateUrl: 'views/showpost.html',
                    controller: 'PostViewCtrl',
                    resolve: {
                        post: function(Post, $route) {
                            return Post.get($route.current.params.postId);
                        }
                    }
                })
                .when('/users/:userId', {
                    templateUrl: 'views/profile.html',
                    controller: 'ProfileCtrl'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                })
                .when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'AuthCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

})();