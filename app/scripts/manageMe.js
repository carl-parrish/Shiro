{
  var manageMeApp = angular.module('manageMeApp', ['firebase', 'ngRoute']);
  manageMeApp.config(function ($routeProvider) {

  });
  manageMeApp.controller('TagsController', function($scope, $firebaseObject, $log){
    var ref = new Firebase('https://glowing-heat-9560.firebaseio.com');
    this.catagory = $firebaseObject(ref);

  });
  manageMeApp.controller('ContactFormController', function(){
    this.contactEntries = {};
    this.addContactEntry = function (entry) {

    };

  });

  manageMeApp.controller('BlogFormController',function(){

    this.calculateWordCount = function(){
      this.wordCount = blog-input.matches(/\b\w+w\b/gi);
    }

  });

  manageMeApp.directive('listTags', function(){
    return {
      restrict: 'E',
      templateUrl: '/scripts/directives/listTags.html',
      controller: "TagsController",
      controllerAs: 'tags'
    };
  });

};
