'use strict';


angular.module('myYoAppApp')
	.controller('CategryCtrl', function ($scope, $http){
		$http.get('MusicDataBase/categrys.json').success(function(data){
			$scope.categorys = data;
		});

		$scope.orderProp = 'id';
	});