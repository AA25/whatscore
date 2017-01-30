(function(){
    
    angular.module('whatscoreModule').factory('fixturesFactory',['$http','$cacheFactory','$q',function($http,$cacheFactory,$q){
        
       var factory = {};
       factory.getteamFixtures = function(clubFix){

              return $http(clubFix)
              .success(function(response){
                
              })
              .error(function(){

              }); 

        };

      var _cache;

      _cache = $cacheFactory('fixturesFactory');


      var allFix = 
        {
          method:'GET',
          url:'http://api.football-data.org/alpha/soccerseasons/398/fixtures',
          headers: {
            'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
          }
        }

       factory.getallFix = function(){
          var promise;

          promise = _cache.get('allFix');

          if(promise === undefined) {
            promise = $http(allFix);
            _cache.put('allFix', promise);
          }


          promise.success(function(response){
            factory.savedFixtures = response.fixtures;
          })
          .error(function(){

          }); 
          return promise;

      };

      factory.getallHist = function(history){
              return $http(history)
              .success(function(response){
                
              })
              .error(function(){

              });                         
      };

      //Returns a copy of this factory
      return factory;

    }]);
    
}());




