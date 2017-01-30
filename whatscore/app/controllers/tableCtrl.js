(function(){

      angular.module('whatscoreModule').controller('tableCtrl',['$scope','$http','$modal','dataService',function($scope, $http, $modal, dataService){

      var positions = {
        1:'#339900',
        2:'#33CC00',
        3:'#33CC33',
        4:'#66CC00',
        5:'#99CC00',
        6:'#99FF00',
        7:'#99CC33',
        8:'#99FF33',
        9:'#CCCC00',
        10:'#CCFF00',
        11:'#CCCC33',
        12:'#CCFF33',
        13:'#FFFF00',
        14:'#FFCC00',
        15:'#FF9900',
        16:'#CC6600',
        17:'#FF6600',
        18:'#FF3300',
        19:'#FF0000',
        20:'#CC0000'
      };

      var allFix = 
      {
        method:'GET',
        url:'http://api.football-data.org/alpha/soccerseasons/398/leagueTable',
        headers: {
          'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
        }
      };

      if(dataService.returnTable().length == 0) 
      {  
        //console.log("The table was empty");
        $http(allFix)
        .success(function(response){
          dataService.storeTable(response.standing);
          //console.log("Lets see what the data stored " + dataService.returnTable());
          $scope.returnTable = dataService.returnTable();
          //console.log("Lets see what the var stored " + $scope.returnTable);
          for(key in positions)
            $scope.returnTable[key-1].myPosition = key,
            $scope.returnTable[key-1].myColor = positions[key];
        })
        .error(function(){
            var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modals/errorModal.html',
            controller: 'modelInstanceCtrl',
            backdrop: 'static'
            });
        });
      }else{
        //console.log("The table was not empty");
        //console.log("Lets see what the data stored " + dataService.returnTable());
        $scope.returnTable = dataService.returnTable();
          
          for(key in positions)
            $scope.returnTable[key-1].myPosition = key,
            $scope.returnTable[key-1].myColor = positions[key];
      };
        
  }]);

}());
