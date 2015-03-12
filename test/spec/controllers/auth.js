'use strict';

describe('Controller: AuthCtrl', function() {

    // load the controller's module
    beforeEach(module('angnewsApp'));

    var AuthCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        AuthCtrl = $controller('AuthCtrl', {
            $scope: scope
        });
    }));

    it('should define a login function', function() {
        expect(scope.login).toEqual(jasmine.any(Function));
    });

    it('should define a log out function', function() {
        expect(scope.logout).toEqual(jasmine.any(Function));
    });

    it('should define a signedIn function', function() {
        expect(scope.signedIn).toEqual(jasmine.any(Boolean));
    });

    // it('should do other stuff', function() {

    // });

});