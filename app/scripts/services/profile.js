(function() {
    'use strict';

    angular.module('angnewsApp').factory('Profile', function(FIREBASE_URL, $firebaseArray, Post, $q) {

        var ref = new Firebase(FIREBASE_URL); // jshint ignore:line

        var profile = {
            get: function(userId) {
                var users = $firebaseArray(ref.child('users'));
                return users.$loaded()
                    .then(function(users) {
                        var userProfile = users.$getRecord(userId);
                        return userProfile;
                    });
            },
            getPosts: function(userId) {
                return $firebaseArray(ref.child('user_posts').child(userId))
                    .$loaded()
                    .then(function(data) {
                        var promises = [];
                        for (var i = 0; i < data.length; i++) {
                            var value = data[i].$value;
                            promises.push(Post.get(value));
                        }
                        return $q.all(promises)
                            .then(function(posts) {
                                return posts;
                            });
                    });
            }
        };
        return profile;
    });

})();