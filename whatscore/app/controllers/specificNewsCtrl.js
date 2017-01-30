(function(){

  angular.module('whatscoreModule').controller('specificnewCtrl',['$scope','$http','dataService','$modal','newsFactory','$routeParams',function($scope, $http, dataService,$modal,newsFactory,$routeParams) {

     var clubNews = dataService.returnData(); 
     $scope.isLoaded = {message : false};
      // $http(clubNews)
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
  
      if(clubNews == null){
              var modalInstance = $modal.open({
              animation: true,
              templateUrl: 'modals/errorModal.html',
              controller: 'modelInstanceCtrl',
              backdrop: 'static'
              });
      };

      function init(){
        $scope.isLoaded.message = false;
        newsFactory.apiService(clubNews.url)
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