(function(){

  angular.module('whatscoreModule').controller('playerCtrl',['$scope','$http','dataService','$modal',function($scope, $http, dataService,$modal) {

      $scope.isLoaded = {message : false};
      var squad = dataService.returnData();

      if(squad == null){
        var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'modals/errorModal.html',
        controller: 'modelInstanceCtrl',
        backdrop: 'static'
        });
      };

      $http(squad)
      .success(function(response){
        $scope.player = response.players;
          for (var i = 0; i < $scope.player.length; i++) {
            flagSetter($scope.player[i]);
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

      function flagSetter(Nationality)
      {
        var flags = {
          Germany : '../img/flags/Germany.png',
          France : '../img/flags/France.png',          
          England : '../img/flags/England.png',
          Spain : '../img/flags/Spain.png',
          Chile : '../img/flags/Chile.png',
          Colombia : '../img/flags/Columbia.png',
          Argentina : '../img/flags/Argentina.png',
          Australia : '../img/flags/Australia.png',
          Poland : '../img/flags/Poland.png',
          Brazil : '../img/flags/Brazil.png',
          Wales : '../img/flags/Wales.png',
          Scottland : '../img/flags/Scotland.png',
          Austria : '../img/flags/Austria.png',
          Netherlands : '../img/flags/Netherlands.png',
          Ireland : '../img/flags/Ireland.png',
          Belgium : '../img/flags/Belgium.png',
          Switzerland : '../img/flags/Switzerland.png',
          Denmark : '../img/flags/Denmark.png',
          Serbia : '../img/flags/Serbia.png',
          Nigeria : '../img/flags/Nigeria.png',
          Kenya : '../img/flags/Kenya.png',
          Zambia : '../img/flags/Zambia.png',
          Japan : '../img/flags/Japan.png',
          Romania : '../img/flags/Romania.png',
          Togo : '../img/flags/Togo.png',
          Honduras : '../img/flags/Honduras.png',
          Montenegro : '../img/flags/Montenegro.png',
          Uruguay : '../img/flags/Uruguay.png',
          Sweden : '../img/flags/Sweden.png',
          Iceland : '../img/flags/Iceland.png',
          Benin : '../img/flags/Benin.png',
          Finland : '../img/flags/Finland.png',
          Senegal : '../img/flags/Senegal.png',
          Cameroon : '../img/flags/Cameroon.png',
          Canada : '../img/flags/Canada.png',
          Morocco : '../img/flags/Morocco.png',
          Norway : '../img/flags/Norway.png',
          Algeria : '../img/flags/Algeria.png',
          Ghana : '../img/flags/Ghana.png',
          Italy : '../img/flags/Italy.png',
          Slovakia : '../img/flags/Slovakia.png',
          Ecuador : '../img/flags/Ecuador.png',
          Jamaica : '../img/flags/Jamaica.png',
          Paraguay : '../img/flags/Paraguay.png',
          Portugal : '../img/flags/Portugal.png',
          Croatia : '../img/flags/Croatia.png',
          United_States : '../img/flags/United_States.png',          
          Czech_Republic : '../img/flags/Czech_Republic.png',
          Congo_DR : '../img/flags/Congo_DR.png',
          Costa_Rica : '../img/flags/Costa_Rica.png',
          South_Africa : '../img/flags/South_Africa.png',
          New_Zealand : '../img/flags/New_Zealand.png',
          Northern_Ireland : '../img/flags/Northern_Ireland.png',
          Korea_South : '../img/flags/Korea_South.png',
          Bosnia_Herzegovina : '../img/flags/Bosnia_Herzegovina.png',         
          Cote_d_Ivoire : '../img/flags/Cote_d_Ivoire.png'
        };

        for (key in flags)      
          if(Nationality.nationality.replace("-", " ").replace(",","").replace("'"," ") == key.replace(/_/g,' '))
          {
            Nationality["img"] = flags[key];
          }
      }

  }]);

}());

