'use strict';

angular.module('ancora').controller('MainCtrl', ['$scope', function(scope) { 
  scope.message = 'blabla';
  
  var questions = [{text: 'Sonho em ser tão bom no que faço de tal forma que meus conhecimentos especializados sejam constantemente procurados.'},
                   {text: 'Sinto-me mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o esforço dos outros.'},
                   {text: 'Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho à minha maneira de no tempo por mim programado.'}];

  scope.questions = questions;
}]);

