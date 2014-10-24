'use strict';

describe('Controller: CategryctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('myYoAppApp'));

  var CategryctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategryctrlCtrl = $controller('CategryctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
