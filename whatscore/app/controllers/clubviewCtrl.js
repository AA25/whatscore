var ImageW;

ImageW = function(options) {
    var that = this;

    this.height = options.height;
    this.width = options.width;
    this.src = options.src;

    this._image = new Image(this.width, this.height);

    this._image.src = options.src;

};

(function(){

  angular.module('whatscoreModule').controller('clubviewCtrl',['$scope','$modal', '$log','$http','clubsFactory','$location','$rootScope','dataService',function($scope, $modal, $log, $http, clubsFactory, $location,$rootScope, dataService) {
  	
      $scope.open = function (team) 
        { 
          var $newScope;

          $newScope = $scope.$new();
          $newScope.team = team;

          var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'modals/clubmodal.html',
          controller: 'modelInstanceCtrl',
          backdrop: 'static',
          scope: $newScope
          });

        };

      $scope.isLoaded = {message : false};

      function init(){
          clubsFactory.getTeams()
          .success(function(response){
            $scope.clubs = response.teams;
            if($scope.isLoaded.message == false){$scope.isLoaded.message = true};
            for(var i=0; i<$scope.clubs.length; i++){
              $scope.clubs[i].jersey = "";
              $scope.clubs[i].stadiumName = "";
              $scope.clubs[i].stadiumImg = "";
                  appendJersey($scope.clubs[i]);
                  appendStadiumData($scope.clubs[i]);
                  //console.log($scope.clubs[i]);
            };   
          })
          .error(function(){
            var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modals/errorModal.html',
            controller: 'modelInstanceCtrl',
            backdrop: 'static'
            });
          });
      }
      init();

      $scope.$on('testEvent', function(event,data){       
        dataService.storeData(data);      
        $location.url('/fixtures');
      });

      $scope.$on('squadEvent', function(event,data){      
        dataService.storeData(data);       
        $location.url('/squads');
      });

      $scope.$on('newsEvent', function(event,data){     
        dataService.storeData(data);       
        $location.url('/specificNews');
      });

      function appendJersey(endPointA){

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
            if(endPointA.name == key.replace(/_/g,' ')){
              endPointA.jersey = jerseys[key];
            };
      };

    function appendStadiumData(endPointA){
      var stadiumData = [
      {
        name:'Emirates',
        img:'../img/stadium/emirates.jpg'
      },
      {
        name:'Villa_Park',
        img:'../img/stadium/villaPark.jpg'
      },
      {
        name:'Vitality',
        img:'../img/stadium/vitality.jpg'
      },
      {
        name:'Stamford_Bridge',
        img:'../img/stadium/stamfordBridge.jpg'
      },
      {
        name:'Selhurst_Park',
        img:'../img/stadium/selhurstPark.jpg'
      },
      {
        name:'Goodison_Park',
        img:'../img/stadium/goodisonPark.jpg'
      },
      {
        name:'King_Power_Stadium',
        img:'../img/stadium/kingPowerStadium.jpg'
      },
      {
        name:'Anfield',
        img:'../img/stadium/anfield.jpg'
      },
      {
        name:'City_of_Manchester_Stadium',
        img:'../img/stadium/cityOfManchesterStadium.jpg'
      },
      {
        name:'Old_Trafford',
        img:'./img/stadium/oldTrafford.jpg'
      },
      {
        name:'St_James_Park',
        img:'../img/stadium/stJamesPark.jpg'
      },
      {
        name:'Carrow_Road',
        img:'../img/stadium/carrowRoad.jpg'
      },
      {
        name:'St_Marys',
        img:'../img/stadium/stMarys.jpg'
      },
      {
        name:'Britannia',
        img:'../img/stadium/britannia.jpg'
      },
      {
        name:'Stadium_Of_Light',
        img:'../img/stadium/stadiumOfLight.jpg'
      },
      {
        name:'Libersity_Stadium',
        img:'../img/stadium/libertyStadium.jpg'
      },
      {
        name:'White_Hart_Lane',
        img:'../img/stadium/whiteHartLane.jpg'
      },
      {
        name:'The_Hawthorns',
        img:'../img/stadium/theHawthorns.jpg'
      },
      {
        name:'Boleyn_Ground',
        img:'../img/stadium/boleynGround.jpg'
      },
      {
        name:'Vicarage_Road',
        img:'../img/stadium/vicarageRoad.jpg'
      }
    ];
      var stadiums = {
        Arsenal_FC : stadiumData[0],
        Aston_Villa_FC : stadiumData[1],
        AFC_Bournemouth : stadiumData[2],
        Chelsea_FC : stadiumData[3],
        Crystal_Palace_FC : stadiumData[4],
        Everton_FC : stadiumData[5],
        Leicester_City_FC : stadiumData[6],
        Liverpool_FC : stadiumData[7],
        Manchester_City_FC : stadiumData[8],
        Manchester_United_FC : stadiumData[9],
        Newcastle_United_FC : stadiumData[10],
        Norwich_City_FC : stadiumData[11],
        Southampton_FC : stadiumData[12],
        Stoke_City_FC : stadiumData[13],
        Sunderland_AFC : stadiumData[14],
        Swansea_City_FC : stadiumData[15],
        Tottenham_Hotspur_FC : stadiumData[16],
        West_Bromwich_Albion_FC : stadiumData[17],
        West_Ham_United_FC : stadiumData[18],
        Watford_FC : stadiumData[19]
      };

      for (key in stadiums)      
        if( endPointA.name == key.replace(/_/g,' ') ){
            endPointA.stadiumName = stadiums[key].name.replace(/_/g,' ');
            endPointA.stadiumImg = stadiums[key].img;

        };

    };

  }]);

}());