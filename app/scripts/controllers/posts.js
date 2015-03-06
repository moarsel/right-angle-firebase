(function() {
    'use strict';

    angular.module('angnewsApp').controller('PostsCtrl', ['$scope', 'Post', '$location',
        function($scope, Post, $location) {

            $scope.posts = Post.all;

            $scope.post = {
                body: 'text goes here',
                'title': ''
            };

            $scope.submitPost = function() {
                Post.create($scope.post).then(function(ref) {
                    $scope.post = {
                        body: 'text goes here',
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