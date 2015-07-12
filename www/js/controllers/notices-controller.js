angular.module('NoticesController', [])

.controller('NoticesCtrl', function($scope, $state, ApiNotices) {

	$scope.notices = [];

  ApiNotices.getApiData(function (data) {
  	console.log(data);
      $scope.notices = data.equipe.plantao;
  });

});