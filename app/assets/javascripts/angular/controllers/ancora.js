'use strict';

angular.module('ancora').controller('MainCtrl', ['$scope', function(scope) { 
  scope.message = 'blabla';
  
  var questions = [{text: 'texto da pergunta 1'},
                   {text: 'texto da pergunta 2'},
                   {text: 'texto da pergunta 3'}];

  scope.questions = questions;
}]);

