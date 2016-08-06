angular.module('myApp',['ui.router','myApp.controllers','myApp.service'])
	   .config(function($stateProvider,$urlRouterProvider){

	   	$urlRouterProvider.otherwise('/home');
	   
	   	$stateProvider
	   	.state('home',{
	   		url:'/home',
	   		templateUrl:'login.html',
	   		controller: 'myController'
	   	})
	   	
	   	.state('orgregistration',{
	   		url:'/orgregistration',
	   		templateUrl:'orgregistration.html',
	   		controller: 'myController'
	   	});
});
