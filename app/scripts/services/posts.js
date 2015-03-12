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
                            ref.child('user_posts').child(post.creatorUID).child(postRef.key())
                                .set(postRef.key());
                            return postRef;
                        });
                },
                get: function(postId) {
                    return posts.$loaded()
                        .then(function(posts){
                            return posts.$getRecord(postId);
                        });
                },
                comments: function(postId) {
                    var comments = $firebaseArray(ref.child('comments').child(postId));
                    return comments;
                },
                delete: function(post) {
                    // delete the user-post association
                    var userPosts = $firebaseArray(ref.child('user_posts').child(post.creatorUID));
                    userPosts.$loaded().then(function(userPost){
                        var postToDelete = userPost.$indexFor(post.$id);
                        userPost.$remove(postToDelete);
                    });

                    // delete associated comments
                    // TODO: (no comment post association)
                    
                    // finally, delete the post itself
                    return posts.$remove(post);
                }
            };

            return Post;
        }
    ]);

})();