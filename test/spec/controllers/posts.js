'use strict';

describe('Controller: PostsCtrl', function() {


    var PostsCtrl, scope, Post, Auth;

    beforeEach(function() {
        var mockPostService = {};

        module('angnewsApp', function($provide) {
            $provide.value('Post', mockPostService);

            $provide.value('Auth', {
                getUserProfile: function() {
                    return {
                        then: function(callback) {
                            return callback({
                                'name': 'Tom',
                                'provider_id': 'twitter:123'
                            });
                        }
                    };
                },
                signedIn: function() {
                    return true;
                },
                authorize: function() {
                    return {
                        'auth': {
                            'uid': 'twitter:123'
                        }
                    };
                }
            });
        });

        inject(function($q) {
            mockPostService.create = function(post) {
                console.log('called create');
                var defer = $q.defer();

                return defer.resolve(post);

                // return defer.promise;
            };

            mockPostService.all = [{
                'title': 'test',
                'body': 'test body'
            }, {
                'title': 'anothertitle',
                'body': 'testbody2'
            }];
            mockPostService.get = function() {
                return {
                    then: function(callback) {
                        return callback({
                            'body': 'test body',
                            'title': 'test title'
                        });
                    }
                };
            };
        });
    });


    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _Post_, _Auth_) {
        scope = $rootScope.$new();
        Post = _Post_;
        Auth = _Auth_;
        PostsCtrl = $controller('PostsCtrl', {
            $scope: scope,
            Post: Post
        });
    }));

    it('should have a post object in the scope', function() {
        expect(scope.post).toBeDefined();
    });

    it('should retrieve a list of posts from the post service', function() {
        expect(scope.posts[0].title).toEqual('test');
    });

    it('should set sign in status', function() {
        expect(scope.signedIn()).toEqual(true);
    });

    it('should set the user data', function() {
        expect(scope.user.name).toEqual('Tom');
        expect(scope.user.provider_id).toEqual('twitter:123'); //jshint ignore:line
    });

    it('should submit new post from scope data using the create post service', function() {
        spyOn(Post, 'create');
        scope.submitPost();
        expect(scope.post.creator).toEqual('Tom');
        expect(scope.post.creatorUID).toEqual('twitter:123');
        expect(scope.post.body).toEqual('because...');
        expect(Post.create).toHaveBeenCalledWith(scope.post);
    });

});