(function(){

	angular.module('whatscoreModule').controller('headerCtrl',['$modal','$scope','dataService','localStorageService','$interval',function($modal,$scope,dataService,localStorageService,$interval){
    $scope.whatAction = "LOGIN";
    $scope.whatScore = "what score?"
    $scope.button = {message:false};
    $scope.changer = false;
    $scope.favTeam = "";
    //$scope.twitter = "";
    $scope.twitterLink="";
    $scope.twitterID = "628348320264650754"; //Default for BPL twitter feed
    $scope.refresh = false;
    //$scope.twitterID="";
    var date = new Date();

    var users = JSON.parse(localStorageService.get('users'));
    var status = JSON.parse(localStorageService.get('status'));
    var tokens = JSON.parse(localStorageService.get('tokens'));

    var twitterDetails = [
      {
        tID:'628252698878545920',
        tLink:'@Arsenal'
      },
      {
        tID:'628253428280651776',
        tLink:'@AVFCOfficial'
      },
      {
        tID:'628254315250098176',
        tLink:'@afcbournemouth'
      },
      {
        tID:'628277658518994944',
        tLink:'@ChelseaFC'
      },
      {
        tID:'628277851201097728',
        tLink:'@CPFC'
      },
      {
        tID:'628278056533295104',
        tLink:'@Everton'
      },
      {
        tID:'628278305498755072',
        tLink:'@LCFC'
      },
      {
        tID:'628321618037723136',
        tLink:'@LFC'
      },
      {
        tID:'628278451531841536',
        tLink:'@MCFC'
      },
      {
        tID:'628221476727095296',
        tLink:'@ManUtd'
      },
      {
        tID:'628282747367370752',
        tLink:'@NUFC'
      },
      {
        tID:'628283276524916737',
        tLink:'@NorwichCityFC'
      },
      {
        tID:'628283818991071232',
        tLink:'@SouthamptonFC'
      },
      {
        tID:'628284646317551616',
        tLink:'@stokecity'
      },
      {
        tID:'628322031294119936',
        tLink:'@SunderlandAFC'
      },
      {
        tID:'628284965831184384',
        tLink:'@SwansOfficial'
      },
      {
        tID:'628284403828027393',
        tLink:'@SpursOfficial'
      },
      {
        tID:'628285183641427969',
        tLink:'@WBAFCofficial'
      },
      {
        tID:'628285378148102144',
        tLink:'@whufc_official'
      },
      {
        tID:'628323713180635136',
        tLink:'@WatfordFC'
      }
    ];

    var ID = {
      ARSENAL : twitterDetails[0],
      ASTON_VILLA : twitterDetails[1],
      AFC_BOURNEMOUTH : twitterDetails[2],
      CHELSEA : twitterDetails[3],
      CRYSTAL_PALACE : twitterDetails[4],
      EVERTON : twitterDetails[5],
      LEICESTER : twitterDetails[6],
      LIVERPOOL : twitterDetails[7],
      MANCHESTER_CITY : twitterDetails[8],
      MANCHESTER_UNITED : twitterDetails[9],
      NEWCASTLE : twitterDetails[10],
      NORWICH : twitterDetails[11],
      SOUTHAMPTON : twitterDetails[12],
      STOKE : twitterDetails[13],
      SUNDERLAND : twitterDetails[14],
      SWANSEA : twitterDetails[15],
      TOTTENHAM : twitterDetails[16],
      WEST_BROM : twitterDetails[17],
      WEST_HAM : twitterDetails[18],
      WATFORD : twitterDetails[19]
    };


    if( status === null){
        status = {
          state : false
        };  
        localStorageService.set("status", JSON.stringify(status));
    };


    if(status != null){
      if(status.state == true){
        $scope.whatAction = "LOGOUT"; 
        $scope.button.message = true; 
        $scope.changer = true;
      }else{
        $scope.whatAction = "LOGIN";  
        $scope.button.message = false;
        $scope.changer = false;
      };
    };

    if(status.state == true)
    {
      for(var i=0; i<users.length;i++){
        if( users[i].userToken != undefined)
        {
          if(users[i].userToken == tokens.token)
          {
            //tokens match at this point
            $scope.whatScore = "Hi, "+users[i].name;
            $scope.favTeam = users[i].Team;
            for ( key in ID )
            if($scope.favTeam == key)
            {
              $scope.twitterID = ID[key].tID;
              $scope.twitterLink = ID[key].tLink;
              $scope.favTeam = $scope.favTeam.replace("_", " ");
              break;
            }
          };
        };
      };
    };

    $scope.$on('loginEvent', function(event,args){      
        $scope.whatAction = "LOGOUT"; 
        $scope.button.message = true; 
        $scope.changer = true;
        users = JSON.parse(localStorageService.get('users'));
        status = JSON.parse(localStorageService.get('status'));
        tokens = JSON.parse(localStorageService.get('tokens'));
          for(var i=0; i<users.length;i++)
          {
            if( users[i].userToken == tokens.token ){
              $scope.whatScore = "Hi, "+users[i].name;
              $scope.favTeam = users[i].Team;  
              break;
            };
          };
          for ( key in ID )
            if($scope.favTeam == key)
            {
              $scope.twitterID = ID[key].tID;
              $scope.twitterLink = ID[key].tLink;
              $scope.favTeam = $scope.favTeam.replace("_", " ");   
              break;
            };
      });
      
    
    // $scope.$watch('twitterID', function(value) {
    //      console.log("twitterID changed");
    //      console.log(value);
    //     if(value === undefined) return;

    //     $('twitter-id-html').attr('data-widget-id', value);


    // });

    $scope.$on('logoutEvent', function(event,args){      
        $scope.whatAction = "LOGIN";  
        $scope.button.message = false;
        $scope.changer = false;
        $scope.whatScore = "what score?"
      });

    $scope.$on('registerEvent', function(event,args){      
        $scope.whatAction = "LOGIN";  
      });

    if( users === null){
      $scope.whatAction = "REGISTER";
    };
    if( users != null && status.state != true){
      $scope.whatAction = "LOGIN";
    };

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


		$scope.open = function () 
        { 
          var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'modals/loginModal.html',
          controller: 'loginCtrl',
          backdrop: 'static'
          });

        };

    $scope.$on('loginClosedEvent', function(event,args){
        status = JSON.parse(localStorageService.get('status'));
        if(status.state == true){
          $scope.restartPage();
          $scope.refresh = true;
        };  
      });
    
    $scope.restartPage = function(){
        console.log("refresh");
        location.reload();
    };

	}])
  
  //Unused as of 10 Aug 2015
  // .directive('twitDir',function(){
  //   // function link(scope, element, attrs){

  //   // };

  //   // return {
  //   //   link: link
  //   // };
  //   $scope.restartPage = function(){
  //     console.log("refresh");
  //     location.reload();
  //   };

  //   return{
  //     restrict: 'E',
  //     templateUrl: './views/twit-id.html'
  //   };

  // });

}())

