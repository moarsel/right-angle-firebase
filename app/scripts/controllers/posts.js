(function() {
    'use strict';

    angular.module('angnewsApp').controller('PostsCtrl', ['$scope', 'Post', '$location', 'Auth',
        function($scope, Post, $location, Auth) {

            $scope.auth = Auth.authorize();
            
            $scope.posts = Post.all;
            
            $scope.signedIn = Auth.signedIn;


            if ($scope.signedIn()) {
                Auth.getUserProfile($scope.auth.uid)
                    .then(function(user){
                        $scope.user = user;
                    });
            }

            $scope.post = {
                body: 'because...',
                'title': 'I think...'
            };

            $scope.submitPost = function() {
                $scope.post.creator = $scope.user.name;
                $scope.post.creatorUID = $scope.user.provider_id; // jshint ignore:line

                Post.create($scope.post).then(function(ref) {
                    $location.path('/posts/' + ref.key());
                });
            };

            $scope.deletePost = function(post) {
                Post.delete(post);
            };
        }
    ]);
})();