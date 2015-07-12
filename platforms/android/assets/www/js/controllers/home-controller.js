angular.module('HomeController', [])

.controller('HomeCtrl', function($http, $scope, $state, ApiHome) {
		
  $scope.last_game = [];
  $scope.nexts_games = [];

  ApiHome.getApiData(function (data) {
  	console.log(data);
      $scope.last_game = data;
      $scope.nexts_games = data.proximos;
  });


});