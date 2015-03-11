'use strict';

describe('Controller: PostViewCtrl', function() {

    // load the controller's module
    beforeEach(module('angnewsApp'));

    var PostViewCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, Post) {

        scope = $rootScope.$new();
        spyOn(Post, 'get').and.callThrough();
        PostViewCtrl = $controller('PostViewCtrl', {
            $scope: scope,
            $routeParams: {
                postId: '1'
            },
            resolvedPost: 
                {'body':'testBody','title':'test title'}
        });
    }));

    it('should have a post with a title and body', function() {
        expect(scope.post.body).toEqual('testBody');
        expect(scope.post.title).toEqual('test title');
    });

    it('should define an addComment function', function() {
        expect(scope.addComment).toEqual(jasmine.any(Function));
    });

    it('should define a deleteComment function', function() {
        expect(scope.addComment).toEqual(jasmine.any(Function));
    });

    it('should define a signedIn function', function() {
        expect(scope.signedIn).toEqual(jasmine.any(Function));
    });

    it('should have a list of comments in the scope', function() {
        expect(scope.comments).toBeDefined();
    });

});