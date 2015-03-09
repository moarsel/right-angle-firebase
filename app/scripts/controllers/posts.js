(function() {
    'use strict';

    angular.module('angnewsApp').controller('PostsCtrl', ['$scope', 'Post', '$location', 'Auth',
        function($scope, Post, $location, Auth) {

            $scope.posts = Post.all;
            $scope.user = Auth.user;

            $scope.post = {
                body: 'text goes here',
                'title': ''
            };

            $scope.submitPost = function() {
                $scope.post.creator = $scope.user.name;
                $scope.post.creatorUID = $scope.user.provider_id; // jshint ignore:line

                Post.create($scope.post).then(function(ref) {
                    $location.path('/posts/' + ref.name());
                });
            };

            $scope.deletePost = function(post) {
                Post.delete(post);
            };


        }
    ]);

})();