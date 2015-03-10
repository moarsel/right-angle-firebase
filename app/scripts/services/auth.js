(function() {

    'use strict';

    angular.module('angnewsApp').factory('Auth', function(FIREBASE_URL, $firebaseAuth, $firebaseArray, $timeout) {
        var ref = new Firebase(FIREBASE_URL); // jshint ignore:line
        var authObj = $firebaseAuth(ref);
        var users = $firebaseArray(ref.child('users'));

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
            },
            setUserProfile: function(data) {
                ref.child('users').child(data.provider_id).set(data); // jshint ignore:line
            },
            getUserProfile: function(user) {
                Auth.user = users.$getRecord(user);
                return users.$getRecord(user);
            },
            user: {},
        };

        return Auth;
    });


})();