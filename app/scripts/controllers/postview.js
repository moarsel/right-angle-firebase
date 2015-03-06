(function() {
    'use strict';

    angular.module('angnewsApp').controller('PostViewCtrl', ['$scope','Post','$routeParams',
        function($scope, Post, $routeParams) {
            $scope.post = Post.get($routeParams.postId);
        }
    ]);

})();