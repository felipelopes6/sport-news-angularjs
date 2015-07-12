angular.module('NoticesService', [])

.factory('ApiNotices', function($http) {

  var getApiData = function(callback) {
    return $http.get('http://globoesporte.globo.com/servico/esporte/cards/http://semantica.globo.com/esportes/equipe/292/equipe,vaivem,equipe,lista,opiniao.json')
      .then(function(data, content) {
        callback(data.data)
      });
  };

  return {
    getApiData: getApiData
  };
})