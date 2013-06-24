'use strict';

var app = angular.module('ancora').controller('MainCtrl', ['$scope', '$http', function(scope, http) { 

  scope.currentPage = 0;
  scope.pageSize = 5;
  scope.numberOfPages=function(){
    return Math.ceil(scope.answer.questions.length/scope.pageSize);
  }

  scope.steps = ['objective', 'inventory', 'instructions', 'personal', 'questions1', 'questions2', 'questions3', 'questions4', 'questions5', 'questions6'];
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
                   {text: 'Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho à minha maneira de no tempo por mim programado.', answer:{}},
                   {text: "question 1", answer: {}},
                   {text: "question 2", answer: {}},
                   {text: "question 3", answer: {}},
                   {text: "question 4", answer: {}},
                   {text: "question 5", answer: {}},
                   {text: "question 6", answer: {}},
                   {text: "question 7", answer: {}},
                   {text: "question 8", answer: {}},
                   {text: "question 9", answer: {}},
                   {text: "question 10", answer: {}},
                   {text: "question 11", answer: {}},
                   {text: "question 12", answer: {}},
                   {text: "question 13", answer: {}},
                   {text: "question 14", answer: {}},
                   {text: "question 15", answer: {}},
                   {text: "question 16", answer: {}},
                   {text: "question 17", answer: {}},
                   {text: "question 18", answer: {}},
                   {text: "question 19", answer: {}},
                   {text: "question 20", answer: {}},
                   {text: "question 21", answer: {}},
                   {text: "question 22", answer: {}},
                   {text: "question 23", answer: {}},
                   {text: "question 24", answer: {}},
                   {text: "question 25", answer: {}},
                   {text: "question 26", answer: {}},
                   {text: "question 27", answer: {}},
                   {text: "question 28", answer: {}},
                   {text: "question 29", answer: {}},
                   {text: "question 30", answer: {}},
                   {text: "question 31", answer: {}}];

  scope.answer = {name:"", email:"", institution: "", course: "", questions: questions};
}]);
app.filter('startFrom', function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  }
});
