(function(){

	angular.module('whatscoreModule').controller('contactCtrl',
    ['$scope','$http',function($scope, $http){

      //Variables to show status message once submit button is pressed. When boolean becomes true, a status will pop up respectively.
      $scope.Error = {message : false};
      $scope.Process = {message : false};
      $scope.Success = {message : false};

      function notEmpty(x,y,z){
        if( (x == "") || (y == "") || (z == "") || (x == undefined) || (y == undefined) || (z == undefined) || (x == undefined && y == undefined && z == undefined
          ) ){
          empty = true;
        }
        else{
          empty = false;
        }
          return empty;  
      };

      $scope.submit = function (name,email,message){
        //Calling notEmpty function 
        if( notEmpty(name,email,message) == true){
          console.log("Input field is empty");
          $scope.Process.message = false;
          $scope.Error.message = true;
        }
        else{
          $scope.Error.message = false;
          $scope.Process.message = true;

          //Make an object out of the pieces of information inputed
          var data = {Name:name,Email:email,Message:message}; 
          console.log("Do something to send email");

          $http.post('/email',data).
          success(function(){
            $scope.Process.message = false;
            $scope.Success.message = true;
          }).error(function(){
            $scope.Process.message = false;
            $scope.Success.message = false;
            $scope.Error.message = true;
          })
        };
        //To make the text in the input fields 'disappear' after submit is pressed
        $scope.Name = ""; $scope.Email = ""; $scope.Message = "";

      };

	}]);

}());