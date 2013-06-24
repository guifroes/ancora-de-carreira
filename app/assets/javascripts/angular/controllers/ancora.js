'use strict';

angular.module('ancora').controller('MainCtrl', ['$scope', '$http', function(scope, http) { 

  scope.create = function() { 
    var postData = "{ \"answer\": { \"name\": \""+ scope.answer.name +"\", \"email\": \""+ scope.answer.email+"\", \"answer_1\": \"" + scope.answer.questions[0].answer + "\", \"answer_2\": \"" + scope.answer.questions[1].answer+ "\", \"answer_3\": \"" + scope.answer.questions[2].answer + "\", \"final_result\": \"bla bla\" } } ";
    http.post("/api/answers/", postData);
  };

  var questions = [{text: 'Sonho em ser tão bom no que faço de tal forma que meus conhecimentos especializados sejam constantemente procurados.', answer:{}},
                   {text: 'Sinto-me mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o esforço dos outros.', answer:{}},
                   {text: 'Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho à minha maneira de no tempo por mim programado.', answer:{}}];

  scope.answer = {name:"", email:"", questions: questions};
}]);

