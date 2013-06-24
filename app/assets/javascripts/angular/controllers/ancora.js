'use strict';

angular.module('ancora').controller('MainCtrl', ['$scope', '$http', function(scope, http) { 

  scope.steps = ['objective', 'inventory', 'instructions'];
  scope.step = 0;

  scope.isCurrentStep = function(step) {
    return scope.step === step;
  };

  scope.setCurrentStep = function(step) {
    scope.step = step;
  };

  scope.getCurrentStep = function() {
    return scope.steps[scope.step];
  };

  scope.isFirstStep = function() {
    return scope.step === 0;
  };

  scope.isLastStep = function() {
    return scope.step === (scope.steps.length - 1);
  };

  scope.getNextLabel = function() {
    return (scope.isLastStep()) ? 'Fim' : 'Próximo';
  };

  scope.handlePrevious = function() {
    scope.step -= (scope.isFirstStep()) ? 0 : 1;
  };

  scope.handleNext = function(dismiss) {
    if(scope.isLastStep()) {
      dismiss();
  } else {
      scope.step += 1;
    }
  };

  scope.create = function() { 
    var postData = "{ \"answer\": { \"name\": \""+ scope.answer.name +"\", \"email\": \""+ scope.answer.email+"\", \"answer_1\": \"" + scope.answer.questions[0].answer + "\", \"answer_2\": \"" + scope.answer.questions[1].answer+ "\", \"answer_3\": \"" + scope.answer.questions[2].answer + "\", \"final_result\": \"bla bla\" } } ";
    http.post("/api/answers/", postData);
  };

  scope.toggleShow = false;

  scope.toggle = function() {
    scope.toggleShow = !scope.toggleShow;
  };

  var questions = [{text: 'Sonho em ser tão bom no que faço de tal forma que meus conhecimentos especializados sejam constantemente procurados.', answer:{}},
                   {text: 'Sinto-me mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o esforço dos outros.', answer:{}},
                   {text: 'Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho à minha maneira de no tempo por mim programado.', answer:{}}];

  scope.answer = {name:"", email:"", questions: questions};
}]);

