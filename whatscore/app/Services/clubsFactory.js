(function(){

	angular.module('whatscoreModule')
    .factory('clubsFactory',['$http', '$cacheFactory',
    function($http, $cacheFactory){

      var _cache;

      _cache = $cacheFactory('clubsFactory');


    	var teams = 
        {
          method:'GET',
          url:'http://api.football-data.org/alpha/soccerseasons/398/teams',
          headers: {
            'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
          }
        }

       var factory = {};
       factory.getTeams = function(){
          var promise;

          promise = _cache.get('teams');

          if(promise === undefined) {
            promise = $http(teams);
            _cache.put('teams', promise);
          }


          promise.success(function(response){
            factory.savedTeams = response.teams;
          })
          .error(function(){

          }); 
		      return promise;

    	};
    	return factory;
    }]);
	
}());