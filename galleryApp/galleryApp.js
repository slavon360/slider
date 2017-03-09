(function(){
 angular.module('galleryApp',['ngRoute','ngResource']);
  function config($routeProvider){
  	$routeProvider
  	.when('/',{
  		templateUrl:'views/gallery.html',
  		controller:'galleryCtrl'
  	})
  	.otherwise({redirectTo: '/'})
  }
 angular.module('galleryApp').config(['$routeProvider',config]);
  
})();