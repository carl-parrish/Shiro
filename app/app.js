(function(){
	'use strict';

	angular.module('shiro', [ 'ngRoute','shiro-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();