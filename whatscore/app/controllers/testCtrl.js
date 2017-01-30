(function(){

  angular.module('whatscoreModule').controller('testCtrl',['$scope','localStorageService','$interval',function($scope,localStorageService,$interval) {

  	$scope.restartPage = function(){
    	location.reload();
	};

  }])

}())