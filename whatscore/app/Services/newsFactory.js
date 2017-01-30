(function(){
    
    angular.module('whatscoreModule').factory('newsFactory',['$http',function($http){
        
        var factory = {};

        factory.apiService = function(url) {
            return $http.get('/apiService?url=' + url); 
        };
   
        factory.getNews = function() {
            return $http.get('/News');
        };

        return factory;
    }]);
    
}());
