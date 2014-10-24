'use strict';

angular.module('myYoAppApp')
	.controller('SongCtrl', ['$scope', '$routeParams','$http', function ($scope, $routeParams, $http){
		var categryId = $routeParams.categryId;
		var songId = $routeParams.songId;
		$http.get('MusicDataBase/'+categryId+'/categry.json').success(function(data){
			$scope.category = data;
		});
		
		$http.get('MusicDataBase/'+categryId+'/songs.json').success(function(data){
			$scope.songs = data;
		});

		$http.get('MusicDataBase/'+categryId+'/'+songId+'/song.json').success(function(data){
			$scope.song = data;
		});

		$scope.orderProp = 'songId';
	}]);