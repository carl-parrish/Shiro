{
    var app = angular.module('manageMeApp', ["firebase"]);
        app.controller('TagsController', function($scope, $firebaseObject, $log){
       var ref = new Firebase("https://glowing-heat-9560.firebaseio.com");
       this.catagory = $firebaseObject(ref);

  });
  app.controller("ContactFormController", function(){
      this.contactEntries = {};
      this.addContactEntry = function(entry){
      };
  });

  app.directive("listTags", function(){
      return {
          restrict: "E",
          templateUrl: "/scripts/directives/listTags.html",
          controller: "TagsController",
          controllerAs: "tags"
      };
  });

};
