(function() {
    'use strict';

    angular.module('angnewsApp').controller('PostViewCtrl', ['$scope', 'Post', 'resolvedPost', '$routeParams', 'Auth',
        function($scope, Post, resolvedPost, $routeParams, Auth) {

            $scope.post = resolvedPost;

            $scope.comments = Post.comments($routeParams.postId);

            $scope.auth = Auth.authorize();

            $scope.signedIn = Auth.signedIn;

            if ($scope.signedIn()) {
                Auth.getUserProfile($scope.auth.uid)
                    .then(function(user) {
                        $scope.user = user;
                    });
            }

            $scope.addComment = function() {
                if (!$scope.commentText || $scope.commentText === '') {
                    return;
                }

                var comment = {
                    text: $scope.commentText,
                    creator: $scope.user.name,
                    creatorUID: $scope.user.provider_id // jshint ignore:line
                };

                $scope.comments.$add(comment);

                $scope.commentText = '';
            };

            $scope.deleteComment = function(comment) {
                $scope.comments.$remove(comment);
            };
        }
    ]);

})();