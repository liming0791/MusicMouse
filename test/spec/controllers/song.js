'use strict';

describe('Controller: SongctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('myYoAppApp'));

  var SongctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongctrlCtrl = $controller('SongctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
