'use strict';

angular.module('ancora').controller('MainCtrl', ['$scope', '$http', function(scope, http) { 
  scope.answer = {}; 
  var postData = "{ \"answer\": { \"name\": \"jose\", \"email\": \"guilherme.froes@gmail.com\", \"answer_1\": \"4\", \"answer_2\": \"5\", \"answer_3\": \"10\", \"final_result\": \"bla bla\" } } ";

  scope.create = function() { 
    http.post("/api/answers/", postData);
  };

  var questions = [{text: 'Sonho em ser tão bom no que faço de tal forma que meus conhecimentos especializados sejam constantemente procurados.'},
                   {text: 'Sinto-me mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o esforço dos outros.'},
                   {text: 'Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho à minha maneira de no tempo por mim programado.'}];

  scope.questions = questions;
}]);

