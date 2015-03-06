(function() {
    'use strict';

    angular.module('angnewsApp').controller('PostsCtrl', ['$scope', 'Post', '$location',
        function($scope, Post, $location) {

            $scope.posts = Post.all;

            $scope.post = {
                url: 'http://',
                'title': ''
            };

            $scope.submitPost = function() {
                Post.create($scope.post).then(function(ref) {
                    $scope.post = {
                        url: 'http://',
                        'title': ''
                    };
                
                $location.path('/posts/' + ref.name());

                });
            };

            $scope.deletePost = function(post) {
                Post.delete(post);
            };


        }
    ]);




})();