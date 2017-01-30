(function(){

	var app = angular.module('whatscoreModule',['ngRoute','ui.bootstrap','ngAnimate','angularUtils.directives.dirPagination','LocalStorageModule','twitter.timeline','trTrustpass']);
	
	app.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'views/clubs.html',
			controller:'clubviewCtrl'
		})
		.when('/fixtures',{
			templateUrl:'views/fixtures.html',
			controller:'fixturesCtrl'
		})
		.when('/allfixtures',{
			templateUrl:'views/allfixtures.html',
			controller:'allfixturesCtrl'
		})
		.when('/clubs',{
			templateUrl:'views/clubs.html',
			controller:'clubviewCtrl'
		})		
		.when('/contact',{
			templateUrl:'views/contact.html',
			controller:'contactCtrl'
		})
		.when('/about',{
			templateUrl:'views/about.html'
		})
		.when('/squads',{
			templateUrl:'views/squads.html',
			controller:'playerCtrl'
		})	
		.when('/error',{
			templateUrl:'views/error.html'
		})		
		.when('/news',{
			templateUrl:'views/news.html',
			controller:'newCtrl'
		})
		.when('/specificNews',{
			templateUrl:'views/specificNews.html',
			controller:'specificnewCtrl'
		})
		.when('/credits',{
			templateUrl:'views/Credits.html'
		})	
		.when('/disclaimer',{
			templateUrl:'views/Disclaimer.html'
		})
		.when('/table',{
			templateUrl:'views/Table.html',
			controller:'tableCtrl'
		})																
		.otherwise({
			redirectTo:'/error'
		});
	});

	app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
			localStorageServiceProvider.setPrefix('whatscore');
		}]);

}());
