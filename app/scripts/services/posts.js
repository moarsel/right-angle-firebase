(function() {
    'use strict';

    angular.module('angnewsApp').factory('Post', ['$firebaseArray', 'FIREBASE_URL',
        function($firebaseArray, FIREBASE_URL) {

            var ref = new Firebase(FIREBASE_URL); // jshint ignore:line
            var posts = $firebaseArray(ref.child('posts'));

            var Post = {
                all: posts,
                create: function(post) {
                    return posts.$add(post);
                },
                get: function(postId) {
                    return posts.$getRecord(postId);
                },
                delete: function(post) {
                    return posts.$remove(post);
                }
            };

            return Post;
        }
    ]);

})();