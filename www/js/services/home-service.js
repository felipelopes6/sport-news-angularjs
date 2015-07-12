angular.module('HomeService', [])

.factory('ApiHome', function($http) {

  var getApiData = function(callback) {
    return $http.get('http://globoesporte.globo.com/servico/equipe/sport/jogos.json')
      .then(function(data, content) {
        callback(data.data)
      });
  };

  return {
    getApiData: getApiData
  };
})