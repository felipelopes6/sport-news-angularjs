angular.module('HomeController', [])

.controller('HomeCtrl', function($http, $scope, $state, ApiHome) {
		
  $scope.games = [];
  

  ApiHome.getApiData(function (data) {
  	console.log(data);
      $scope.games = data;
  });


});