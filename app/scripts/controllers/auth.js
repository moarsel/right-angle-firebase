(function() {

    'use strict';

    angular.module('angnewsApp').controller('AuthCtrl', function($scope, $location, Auth) {

        $scope.user = null;
        $scope.auth = null;

        $scope.signedIn = Auth.signedIn();
        $scope.logout = Auth.logout;

        $scope.login = function () {
            Auth.login().then(function(authData) {
                Auth.getUserProfile(authData.uid)
                    .then(function(user){
                        $scope.user = user;
                    });
            })
                .catch(function(error) {
                    $scope.error = error.message;
                });
        };


        Auth.onAuth(function(authData) {
            $scope.auth = authData;
            $scope.signedIn = Auth.signedIn();

            if ($scope.signedIn) {
                Auth.getUserProfile(authData.uid)
                    .then(function(user){
                        $scope.user = user;
                    });
            } else {
                // $scope.user = {};
            }

            if (authData && $scope.user === null ) {
                var profile = {
                    'name': authData.twitter.displayName,
                    'provider_id': authData.uid,
                    'profileImage': authData.twitter.cachedUserProfile.profile_image_url_https,
                    'location': authData.twitter.cachedUserProfile.location
                };
                Auth.setUserProfile(profile);
            }
        });
    });

})();