(function(){

	angular.module('whatscoreModule').controller('loginCtrl',['$modal','$scope','localStorageService','dataService','$rootScope','$modalInstance',function($modal,$scope,localStorageService,dataService,$rootScope,$modalInstance){
	   	var users = JSON.parse(localStorageService.get('users'));
		var tokens = JSON.parse(localStorageService.get('tokens'));
		var status = JSON.parse(localStorageService.get('status'));
	    var date = new Date();
	    var dateNow;

		if( users === null){
			users = [];

	    	user = {
	    		name: 'Default',
	    		password: '',
	    		userToken: '',
	    		Team:'',
	    		Dob:''
	    	};
	    	users.push(user);
	    	localStorageService.set("users", JSON.stringify(users));

	    	tokens = {
	    		token: null,
	    		session: null,
	    		expiry:null
	    	};
	    	localStorageService.set("tokens", JSON.stringify(tokens));		

	    	status = {
	    		state : false
	    	};	
	    	localStorageService.set("status", JSON.stringify(status));
		};

	    if(status.state == true)
	    {
	    	$scope.reError = {message : false};
			$scope.reSuccess = {message : false};
	    	$scope.loError = {message : false};
			$scope.loSuccess = {message : true};
			$scope.loggedIn = {message : true};
			$scope.loggedOut = {message : false};
			$scope.hideLogout = {message : false};
	    }else{
			$scope.loError = {message : false};
		    $scope.reError = {message : false};
		    $scope.loSuccess = {message : false};
		    $scope.reSuccess = {message : false};
		    $scope.loggedIn = {message : false};
		    $scope.loggedOut = {message : false};
		    $scope.hideLogout = {message : true};
		};

		function clearAll() {
   			return localStorageService.clearAll();
  		}; 
  		//clearAll();

	    function toStorage(key,val){
	    	localStorageService.set("users", JSON.stringify(users));
	    };
	    function tokenStorage(key,val){
	    	localStorageService.set("tokens", JSON.stringify(tokens));
	    };
	    function setName(username, pass, team){ 
	    	pass = md5(pass);
	    	user = {
	    		name: username,
	    		password: pass,
	    		userToken: '',
	    		Team:team,
	    		Dob:''
	    	};
	    	users.push(user);
	    };
	    function tokenCreater(){
	    	tokens = {
	    		token: md5(dateNow),
	    		session: dateNow,
	    		expiry: dateNow + 500
	    	};
	    }
	  	function nameChecker(username){
	  		var nameBool = true; 
	  		var data = JSON.parse(localStorageService.get('users'));
	  		if(data != null){
		    	for(var i=0; i<data.length; i++){
		    		if(username == data[i].name){
		    			nameBool = false;
		    			break;
		    		}
		    	};
		    }	
		    return nameBool;		  		
	  	};
	  	function passChecker(username,pass){
	  		var nameBool = true; 
	  		var passBool = false;
	  		var data = JSON.parse(localStorageService.get('users'));
		    	for(var i=0; i<data.length; i++){
		    		if(username == data[i].name){
		    			if( md5(pass) == data[i].password ){
		    				passBool = true;
		    				dateNow = date.valueOf();
		    				tokenCreater();
		    				data[i].userToken = md5(dateNow);
		    			};
		    		};
		    	};
			tokenStorage();	
			users = data;
		    localStorageService.set("users", JSON.stringify(users));
		    return passBool;
	  	};

	  	function notEmpty(username, pass){
	  		var empty = false;
			if( (username == "") || (pass == "") || (username == undefined) || (pass == undefined)){
	    		empty = true;
	    	};
	    	return empty;	  		
	  	};
	    $scope.login = function(){
	    	if( notEmpty($scope.loginUsername,$scope.loginPassword) == true ){
	    		$scope.loError.message = true;
		    	console.log("Failed login");
	    	}
		    else{

		    	if(passChecker($scope.loginUsername,$scope.loginPassword) == true){
					$scope.loError.message = false;
					$scope.loSuccess.message = true;
					console.log("Success login");
					status = {
	    				state : true
	    			};
	    			localStorageService.set("status", JSON.stringify(status));

					//getAll();
					$rootScope.$broadcast('loginEvent');

		    	}
		    	else{
		    		$scope.loSuccess.message = false;
		    		$scope.loError.message = true;
		    		console.log("Failed login");
		    	};
		    };	
	    };
	    $scope.register = function(){
	    	$scope.loginUsername = ""; $scope.loginPassword = "";
	    	$scope.loError.message = false;
	    	if( notEmpty($scope.registerUsername,$scope.registerPassword) == true ){
	    		console.log("failed");
			   	$scope.reError.message = true;
	    	}
		    else{
		    	if(nameChecker($scope.registerUsername) == true){
		    		$scope.reError.message = false;
		    		$scope.reSuccess.message = true;
			    	setName($scope.registerUsername,$scope.registerPassword,$scope.registerClub);
			    	toStorage();
			    	status = {
	    				state : false
	    			};
	    			localStorageService.set("status", JSON.stringify(status));
	    			$rootScope.$broadcast('registerEvent');
		    	}
		    	else{
		    		console.log("failed registeration");
		    		$scope.reError.message = true;
		    	};
		    };	
	    	$scope.registerUsername = ""; $scope.registerPassword = ""; $scope.registerClub = "undefined";
	    };

	    $scope.logout = function(){
	    	status = {
				state : false
			};
	    	localStorageService.set("status", JSON.stringify(status));
	    	tokens = {
	    		token: null,
	    		session: null,
	    		expiry:null
	    	};
	    	localStorageService.set("tokens", JSON.stringify(tokens));	

	    	$scope.loggedOut.message = true;
	    	$rootScope.$broadcast('logoutEvent');
	    };

		$scope.close = function () {
	    	$rootScope.$broadcast('loginClosedEvent');
	        $modalInstance.dismiss('cancel');
	    };

	    function getAll(){
		    console.log(users);
		    console.log(tokens);
		    console.log(status);
	    };
	}])

}())