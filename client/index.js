(function(){
  'use strict';

  angular.module('demo',[])
  .controller('MainController', ['$scope', function($scope){
    $scope.name = 'GROOT';
    $scope.age = 6938;
    $scope.dogs = [
      {name:'Fido',   age:3},
      {name:'Baxter', age:5},
      {name:'Fluffy', age:7}
    ];
  }]);
})();