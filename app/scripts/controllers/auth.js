(function() {

    'use strict';

    angular.module('angnewsApp').controller('AuthCtrl', function($scope, $location, Auth) {

        $scope.user = null;
        $scope.auth = null;


        $scope.signedIn = Auth.signedIn() ? true : false;


        $scope.login = function scopeLogin() {
            Auth.login().then(function(authData) {

                console.log('We are logged in!', authData);
            })
                .catch(function(error) {
                    $scope.error = error.message;
                });
        };

        $scope.logout = Auth.logout;

        Auth.onAuth(function(authData) {
            $scope.auth = authData;
            $scope.signedIn = authData ? true : false;

            if ($scope.signedIn) {
                $scope.user = Auth.getUserProfile(authData.uid);
                // console.log($scope);
            }

            if (authData && $scope.user === null ) {
                var profile = {
                    'name': authData.twitter.displayName,
                    'provider_id': authData.uid
                };
                Auth.setUserProfile(profile);
            }
        });
    });

})();