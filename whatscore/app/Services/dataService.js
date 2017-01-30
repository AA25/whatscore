(function(){
    
    angular.module('whatscoreModule').factory('dataService',function($http){
          
        var service = {};
        var data = null;
        var active = false;
        var table = [];
        service.storeData = function(input)
        {
          data = input;
        };

        service.getData = function(input)
        { 
          input = data;
        };

        service.returnData = function()
        {
            return data;
        };

        service.storeActive = function(input)
        {
            active = input;
        };

        service.returnActive = function(){

            return active;
        };
        
        service.returnTable = function(){
            return table;
        };
        
        service.storeTable = function(input){
            table = input;
        };   

        return service;

    });
    
}());
