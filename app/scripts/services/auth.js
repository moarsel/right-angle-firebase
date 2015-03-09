(function() {

    'use strict';

    angular.module('angnewsApp').factory('Auth', function(FIREBASE_URL, $firebaseAuth, $timeout) {
        var ref = new Firebase(FIREBASE_URL); // jshint ignore:line
        var authObj = $firebaseAuth(ref);

        var Auth = {
            login: function() {
                return authObj.$authWithOAuthPopup('twitter');
            },
            logout: function() {
                authObj.$unauth();
            },
            signedIn: function() {
                return authObj.$getAuth();
            },
            onAuth: function onLoggedIn(callback) {
                authObj.$onAuth(function(authData) {
                    $timeout(function() {
                        callback(authData);
                    });
                });
            }
        };

        return Auth;
    });


})();