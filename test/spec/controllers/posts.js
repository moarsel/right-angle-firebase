'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('angnewsApp'));

  var PostsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsCtrl = $controller('PostsCtrl', {
      $scope: scope
    });
  }));

  it('should have a post object in the scope', function () {
    expect(scope.post).toBeDefined();
  });

  it('should have a list of posts in the scope', function () {
    expect(scope.posts).toBeDefined();
  });

  it('should submit new posts and change the page', function () {
    // expect(scope.posts).toBeDefined();
  });

});
