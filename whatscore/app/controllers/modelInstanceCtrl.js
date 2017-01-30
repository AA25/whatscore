(function(){

  angular.module('whatscoreModule').controller('modelInstanceCtrl',['$scope','$modalInstance','$rootScope','$modal','fixturesFactory',function($scope, $modalInstance,$rootScope,$modal,fixturesFactory) {

      $scope.cancel = function () {
          	$modalInstance.dismiss('cancel');
        }; 

      $scope.fixtures = function (input){

            $modalInstance.dismiss('cancel');

            $rootScope.$broadcast('testEvent',
                clubFix = 
                {
                  method:'GET',
                  url: $scope.team._links.fixtures.href,
                  headers: {
                    'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
                  }
                }
            );
      };

      $scope.squad = function (input){

            $modalInstance.dismiss('cancel');

            $rootScope.$broadcast('squadEvent',
                clubFix = 
                {
                  method:'GET',
                  url: $scope.team._links.players.href,
                  headers: {
                    'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
                  }
                }
            );
      }; 

      $scope.news = function (){

            $modalInstance.dismiss('cancel');

            var clubNews; 

            var allCodes = {
              AFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/arsenal/v1.0/',
              AVFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/aston-villa/v1.0/',
              AFCB : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/bournemouth/v1.0/',
              CFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/chelsea/v1.0/',
              CRY : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/crystal-palace/v1.0/',
              EFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/everton/v1.0/',
              LCFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/leicester-city/v1.0/',
              LFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/liverpool/v1.0/',
              MCFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/manchester-city/v1.0/',
              MUFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/manchester-united/v1.0/',
              NUFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/newcastle-united/v1.0/',
              null : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/watford/v1.0/',
              SFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/southampton/v1.0/',
              THFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/tottenham-hotspur/v1.0/',
              SCFC : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/stoke-city/v1.0/',
              SUN : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/sunderland/v1.0/',
              SWA : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/swansea-city/v1.0/',
              WBA : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/west-bromwich-albion/v1.0/',
              WHU : 'https://skysportsapi.herokuapp.com/sky/football/getteamnews/west-ham-united/v1.0/'
            };


              for ( key in allCodes )
                if($scope.team.code == key)
                {
                  clubNews=allCodes[key];
                }


            $rootScope.$broadcast('newsEvent',
                news = 
                {
                  method:'GET',
                  url:clubNews
                }
            );
      }; 
      
        var fixtures = 
        [
          // {
                //05/06
          //   method:'GET',
          //   url:'http://api.football-data.org/alpha/soccerseasons/122/fixtures',
          //   headers: {
          //     'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
          //   }
          // },
          // {
                //06/07
          //   method:'GET',
          //   url:'http://api.football-data.org/alpha/soccerseasons/123/fixtures',
          //   headers: {
          //     'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
          //   }
          // },
          // {
              // 07/08 ?
          //   method:'GET',
          //   url:'http://api.football-data.org/alpha/soccerseasons/124/fixtures',
          //   headers: {
          //     'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
          //   }
          // },
          // {
                //08/09
          //   method:'GET',
          //   url:'http://api.football-data.org/alpha/soccerseasons/125/fixtures',
          //   headers: {
          //     'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
          //   }
          // }, 
          {  
                //09/10
            method:'GET',
            url:'http://api.football-data.org/alpha/soccerseasons/113/fixtures',
            headers: {
              'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
            },
            cache:'true'
          },
          {  
            //10/11
            method:'GET',
            url:'http://api.football-data.org/alpha/soccerseasons/114/fixtures',
            headers: {
              'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
            },
            cache:'true'
          },          
          { 
            //11/12
            method:'GET',
            url:'http://api.football-data.org/alpha/soccerseasons/4/fixtures',
            headers: {
              'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
            },
            cache:'true'
          },
          {
            //12/13
            method:'GET',
            url:'http://api.football-data.org/alpha/soccerseasons/301/fixtures',
            headers: {
              'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
            },
            cache: 'true'
          },
          { 
            //13/14
            method:'GET',
            url:'http://api.football-data.org/alpha/soccerseasons/341/fixtures',
            headers: {
              'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
            },
            cache: 'true'
          },
          {
            //14/15
            method:'GET',
            url:'http://api.football-data.org/alpha/soccerseasons/354/fixtures',
            headers: {
              'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
            },
            cache: 'true'
          }                                                           
        ];


        $scope.counter = 0;
        $scope.homeWinCounter = 0;
        $scope.awayWinCounter = 0;
        $scope.drawCounter = 0;
        var hundred = 100;
        $scope.history = { complete:false};
        var historyCounter=0;

        $scope.getHistory = function (home,away){
          $scope.counter = 0;
          $scope.homeWinCounter = 0;
          $scope.awayWinCounter = 0;
          $scope.drawCounter = 0;

          for(var i=0; i<fixtures.length;i++){

          fixturesFactory.getallHist(fixtures[i])
            .success(function(response){
              $scope.test = response.fixtures;
              for(var i = 0; i < $scope.test.length; i++){
                if( ($scope.test[i].homeTeamName == home || $scope.test[i].awayTeamName == home) && ($scope.test[i].homeTeamName == away || $scope.test[i].awayTeamName == away) && ($scope.test[i].homeTeamName != $scope.test[i].awayTeamName) )
                {
                  
                  if( ($scope.test[i].result.goalsHomeTeam) > ($scope.test[i].result.goalsAwayTeam) ){
                      if($scope.test[i].homeTeamName == home){
                        $scope.homeWinCounter++;
                      }
                      else{
                        $scope.awayWinCounter++;
                      };
                  }
                  else if($scope.test[i].result.goalsAwayTeam > $scope.test[i].result.goalsHomeTeam){
                      if($scope.test[i].awayTeamName == home){
                        $scope.homeWinCounter++;
                      }
                      else{
                        $scope.awayWinCounter++;
                      };
                  }
                  else{
                        $scope.drawCounter++;
                  };                                     
                }
              }
              $scope.counter = $scope.homeWinCounter+$scope.awayWinCounter+$scope.drawCounter;
              $scope.played = $scope.counter;

              $scope.homeWin = $scope.homeWinCounter;

              $scope.awayWin = $scope.awayWinCounter;

              $scope.draw = $scope.drawCounter;

              $scope.homeLoss = Math.abs($scope.awayWin);
              $scope.awayLoss = Math.abs($scope.homeWin);

              $scope.homePerC = ($scope.homeWin/$scope.played)*hundred;
              $scope.homePerC = $scope.homePerC.toFixed(2);

              $scope.awayPerC = ($scope.awayWin/$scope.played)*hundred;
              $scope.awayPerC = $scope.awayPerC.toFixed(2);

              $scope.drawPerC = ($scope.draw/$scope.played)*hundred;
              $scope.drawPerC = $scope.drawPerC.toFixed(2);
            })
            .error(function(){
              var modalInstance = $modal.open({
              animation: true,
              templateUrl: 'modals/errorModal.html',
              controller: 'modelInstanceCtrl',
              backdrop: 'static'
              });
            });
          };

          $scope.history.complete = true;
        };
        
  }]);

}());