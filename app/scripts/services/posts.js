(function() {
    'use strict';

    angular.module('angnewsApp').factory('Post', ['$firebaseArray', 'FIREBASE_URL',
        function($firebaseArray, FIREBASE_URL) {

            var ref = new Firebase(FIREBASE_URL); // jshint ignore:line
            var posts = $firebaseArray(ref.child('posts'));

            var Post = {
                all: posts,
                create: function(post) {
                    return posts.$add(post)
                        .then(function(postRef) {
                            console.log(postRef);
                            $firebaseArray(ref.child('user_posts').child(post.creatorUID))
                                .$add(postRef.name());
                            return postRef;
                        });
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