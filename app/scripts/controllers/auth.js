(function() {

    'use strict';

    angular.module('angnewsApp').controller('AuthCtrl', function($scope, $location, Auth) {

        $scope.user = null;

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
            $scope.user = authData;
            $scope.signedIn = Auth.signedIn() ? true : false;
        });

    });

})();