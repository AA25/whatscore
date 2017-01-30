(function(){

  angular.module('whatscoreModule').controller('newCtrl',['$scope','newsFactory','$http','dataService','$modal',function($scope, newsFactory, $http, dataService,$modal) {

      // var squad = dataService.returnData();

      // var squad = 
      //   {
      //     method:'GET',
      //     url:'https://skysportsapi.herokuapp.com/sky/getnews/football/v1.0/'
      //   }      

      // $http(squad)
      // .success(function(response){
      //   $scope.news = response;
      // })
      // .error(function(){
      //     var modalInstance = $modal.open({
      //     animation: true,
      //     templateUrl: 'modals/errorModal.html',
      //     controller: 'modelInstanceCtrl',
      //     backdrop: 'static'
      //     });
      // });
      $scope.isLoaded = {message : false};

      function init(){
        $scope.isLoaded.message = false;
        newsFactory.getNews()
          .success(function(response){
            $scope.news = response;
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

      $scope.refresh = function(){
        $scope.isLoaded.message = true;
        init();
      };

  }]);

}());