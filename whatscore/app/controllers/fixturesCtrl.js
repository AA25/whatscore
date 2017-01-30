(function(){

	angular.module('whatscoreModule').controller('fixturesCtrl',
    ['$scope','$http','fixturesFactory','dataService','$modal',function($scope, $http, fixturesFactory, dataService,$modal){

        

        var clubFixture = dataService.returnData();

        // console.log(dataService.returnData());
        // dataService.getData(clubFixture);
        // console.log(clubFixture);

        // var clubFix = 
        // {
        //   method:'GET',
        //   url:'http://api.football-data.org/alpha/teams/66/fixtures',
        //   headers: {
        //     'X-Auth-Token': 'dc4651805a444f0dbe234c62508a6b64'
        //   }
        // }

        // console.log(dataService.returnData());
        // console.log(clubFix);
      // $http(fixtures)
      // .success(function(response){
      //   $scope.schedule = response.fixtures;
      // })
      // .error(function(){

      // });

      if(clubFixture == null){
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'modals/errorModal.html',
          controller: 'modelInstanceCtrl',
          backdrop: 'static'
        });
      };

      var homeColor = "grey"; var awayColor = "grey";
      $scope.isLoaded = {message : false};

      function init(){
          fixturesFactory.getteamFixtures(clubFixture)
          .success(function(response){
            $scope.schedule = response.fixtures;
              for (var i = 0; i < $scope.schedule.length; i++) {

                $scope.schedule[i].homeJersey = ""; $scope.schedule[i].awayJersey = "";
                appendJersey($scope.schedule[i],$scope.schedule[i]);
                var valueOfGoR = greenOrRed($scope.schedule[i].result.goalsHomeTeam,$scope.schedule[i].result.goalsAwayTeam);

                $scope.schedule[i].result.goalsHomeTeam = valueOfGoR[0];
                $scope.schedule[i].result.goalsAwayTeam = valueOfGoR[1];

                $scope.schedule[i].result.home= homeColor;
                $scope.schedule[i].result.away= awayColor;
                $scope.schedule[i].date = $scope.schedule[i].date.substring(0,10);
                
              }; 
              if($scope.isLoaded.message == false){$scope.isLoaded.message = true}; 
          })
          .error(function(){
            var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'modals/errorModal.html',
            controller: 'modelInstanceCtrl',
            backdrop: 'static'
            });
          });
      }
      init();

      function greenOrRed(home,away) {
          if (home > away) {
            homeColor = "green";
            awayColor = "red";
            return [home, away];             
          }
          else if (away > home) {
            homeColor = "red";
            awayColor = "green";  
            return [home, away];
          }
          else
          {
            homeColor = "grey";
            awayColor = "grey";
            if( (home && away) == -1 ){
              home = home.toString();
              away = away.toString();
              home = home.replace('-1','-');
              away = away.replace('-1','-');
              return [home, away];
            } else{return [home, away];};
          };
      };
      var $history = false;

      $scope.open = function (x) 
        { 
          var $newScope;

          $newScope = $scope.$new();
          $newScope.x = x;

          var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'modals/history.html',
          controller: 'modelInstanceCtrl',
          backdrop: 'static',
          scope: $newScope
          });
      };

      function appendJersey(endPointA,endPointB){

        var jerseys = {
          Arsenal_FC : '../img/team/arsenalJersey.png',
          Aston_Villa_FC : '../img/team/astonJersey.png',
          AFC_Bournemouth : '../img/team/afcbournemouthJersey.png',
          Chelsea_FC : '../img/team/chelseaJersey.png',
          Crystal_Palace_FC : '../img/team/crystalJersey.png',
          Everton_FC : '../img/team/evertonJersey.png',
          Leicester_City_FC : '../img/team/leicesterJersey.png',
          Liverpool_FC : '../img/team/liverpoolJersey.png',
          Manchester_City_FC : '../img/team/mancityJersey.png',
          Manchester_United_FC : '../img/team/manutdJersey.png',
          Newcastle_United_FC : '../img/team/newcastleJersey.png',
          Norwich_City_FC : '../img/team/norwichJersey.png',
          Southampton_FC : '../img/team/southamptonJersey.png',
          Tottenham_Hotspur_FC : '../img/team/tottenhamJersey.png',
          Stoke_City_FC : '../img/team/stokeJersey.png',
          Sunderland_AFC : '../img/team/sunderlandJersey.png',
          Swansea_City_FC : '../img/team/swanseaJersey.png',
          Watford_FC : '../img/team/watfordJersey.png',
          West_Bromwich_Albion_FC : '../img/team/westbromJersey.png',
          West_Ham_United_FC : '../img/team/westhamJersey.png'
        };
        for (key in jerseys)     
            if(endPointA.homeTeamName == key.replace(/_/g,' ')){
              endPointA.homeJersey = jerseys[key];
            }else if(endPointB.awayTeamName == key.replace(/_/g,' ')){
              endPointB.awayJersey = jerseys[key];
            };
      };

	}]);

}());