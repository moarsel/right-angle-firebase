(function() {
    'use strict';

    angular.module('angnewsApp').controller('ProfileCtrl', function($scope, $routeParams, Profile) {
        var uid = $routeParams.userId;

        Profile.get(uid).then(function(profile){
        	$scope.profile = profile;
        });

        Profile.getPosts(uid).then(function(posts) {
            $scope.posts = posts;
        });
    });
})();