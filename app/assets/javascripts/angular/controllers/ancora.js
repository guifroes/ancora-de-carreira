'use strict';

var app = angular.module('ancora').controller('MainCtrl', ['$scope', '$http', function(scope, http) { 

  scope.currentPage = 0;
  scope.pageSize = 5;
  scope.numberOfPages=function(){
    return Math.ceil(scope.answer.questions.length/scope.pageSize);
  }

  scope.steps = ['objective', 'inventory', 'instructions', 'personal', 'questions1', 'questions2', 'questions3', 'questions4', 'questions5', 'questions6', 'questions7', 'questions8'];
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
    var answers = [];

    for(var i = 0; i < scope.answer.questions.length; i++) {
      answers.push({value: scope.answer.questions[i].answer});
    }

    var data = {
      answer: {
                name: scope.answer.name,
                email: scope.answer.email,
                institution: scope.answer.institution,
                course: scope.answer.course,
                question_answers_attributes: answers,
                final_result: "bla bla"
    }};

    var postData = "{ \"answer\": { \"name\": \""+ scope.answer.name +"\", \"email\": \""+ scope.answer.email+"\", \"answer_1\": \"" + scope.answer.questions[0].answer + "\", \"answer_2\": \"" + scope.answer.questions[1].answer+ "\", \"answer_3\": \"" + scope.answer.questions[2].answer + "\", \"final_result\": \"bla bla\" } } ";
    http.post("/api/answers/", data);
  };

  scope.toggleShow = false;

  scope.toggle = function() {
    scope.toggleShow = !scope.toggleShow;
  };

  var questions = [{text: 'Sonho em ser tão bom no que faço de tal forma que meus conhecimentos especializados sejam constantemente procurados.', answer:{}},
                   {text: 'Sinto-me mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o esforço dos outros.', answer:{}},
                   {text: 'Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho à minha maneira de no tempo por mim programado.', answer:{}},
                   {text: "Segurança e estabilidade são mais importantes para mim do que liberdade e autonomia.", answer: {}},
                   {text: "Estou sempre procurando ideias que me permitam iniciar meu próprio negócio.", answer: {}},
                   {text: "Sinto-me bem em minha carreira apenas quando tenho a sensação de ter feito uma contribuição real para o bem da sociedade.", answer: {}},
                   {text: "Sonho com uma carreira na qual eu possa solucionar problemas ou vencer com situações extremamente desafiadoras.", answer: {}},
                   {text: "Preferiria deixar meu emprego a ser colocado em um trabalho que comprometa minha capacidade de me dedicar aos assuntos pessoais e familiares.", answer: {}},
                   {text: "Sinto-me sucedido em minha carreira apenas quando posso desenvolver minhas habilidades técnicas ou funcionais a um nível de competência muito alto.", answer: {}},
                   {text: "Sonho em dirigir uma organização complexa e tomar decisões que afetem muitas pessoas.", answer: {}},
                   {text: "Sinto-me mais realizado em meu trabalho quanto tenho total liberdade de definir minhas próprias tarefas, horários e procedimentos.", answer: {}},
                   {text: "Preferiria deixar meu emprego a aceitar uma tarefa que possa colocar em risco minha segurança na organização.", answer: {}},
                   {text: "Montar meu próprio negócio é mais importante para mim do que atingir uma alta posição gerencial como empregado.", answer: {}},
                   {text: "Sinto-me mais realizado em minha carreira quando posso utilizar meus talentos a serviço dos outros.", answer: {}},
                   {text: "Sinto-me realizado em minha carreira apenas quando enfrento e supero desafios extremamente difíceis.", answer: {}},
                   {text: "Sonho com uma carreira que me permita integrar minhas necessidades pessoais, familiares e de trabalho.", answer: {}},
                   {text: "Tornar-me um gerente técnico em minha área de especialização é mais atraente para mim do que tornar-me um gerente geral.", answer: {}},
                   {text: "Sentir-me-ei bem sucedido em minha carreira apenas quando me tornar um gerente geral em alguma organização. ", answer: {}},
                   {text: "Sentir-me-ei bem sucedido em minha carreira apenas quando alcançar total autonomia e liberdade.", answer: {}},
                   {text: "Procuro trabalhos em organizações que me deem senso de segurança e estabilidade.", answer: {}},
                   {text: "Sinto-me realizado em minha carreira quando tenho a oportunidade de construir alguma coisa que seja resultado unicamente de minhas próprias ideias e esforços.", answer: {}},
                   {text: "Utilizar minhas habilidades para tornar o mundo um lugar melhor para se viver e trabalhar, é mais importante para mim do que alcançar uma posição gerencial de alto nível.", answer: {}},
                   {text: "Sinto-me mais realizado em minha carreira quando solucionei problemas insolúveis ou venci o que aparentemente era impossível de ser vencido.", answer: {}},
                   {text: "Sinto-me bem sucedido na vida apenas quando fui capaz de equilibrar minhas necessidades pessoais, familiares e de carreira.", answer: {}},
                   {text: "Preferiria deixar meu emprego do que aceitar uma tarefa de rodízio que me afaste da minha área de experiência.", answer: {}},
                   {text: "Tornar-me um gerente geral é mais atraente para mim do que tornar-me um gerente técnico em minha área de especialização.", answer: {}},
                   {text: "Para mim, poder fazer um trabalho à minha própria maneira, sem regras e restrições, é mais importante do que segurança.", answer: {}},
                   {text: "Sinto-me mais realizado em meu trabalho quando percebo que tenho total segurança financeira e estabilidade no trabalho", answer: {}},
                   {text: "Sinto-me bem sucedido em meu trabalho apenas quando posso criar ou construir alguma coisa que seja inteiramente de minha autoria.", answer: {}},
                   {text: "Sonho em ter uma carreira que faça uma real contribuição à humanidade e à sociedade.", answer: {}},
                   {text: "Procuro oportunidades de trabalho que desafiem fortemente minhas habilidades para solucionar problemas.", answer: {}},
                   {text: "Equilibrar as exigências da minha vida pessoal e profissional é mais importante do que alcançar alta posição gerencial.", answer: {}},
                   {text: "Sinto-me plenamente realizado em meu trabalho quando sou capaz de empregar minhas habilidades e talentos especiais.", answer: {}},
                   {text: "Preferiria deixar minha organização a aceitar um emprego que me afastasse da trajetória de gerência geral.", answer: {}},
                   {text: "Preferiria deixar minha organização a aceitar um emprego que reduza minha autonomia e liberdade.", answer: {}},
                   {text: "Sonho em ter uma carreira que me dê senso de segurança e estabilidade.", answer: {}},
                   {text: "Sonho em iniciar e montar meu próprio negócio.", answer: {}},
                   {text: "Preferiria deixar minha organização a aceitar uma tarefa que prejudique minha capacidade de servir aos outros.", answer: {}},
                   {text: "Trabalhar em problemas praticamente insolúveis para mim é mais importante do que alcançar uma posição gerencial de alto nível.", answer: {}},
                   {text: "Sempre procurei oportunidades de trabalho que minimizassem interferências com assuntos pessoais e familiares.", answer: {}}];

  scope.answer = {name:"", email:"", institution: "", course: "", questions: questions};
}]);
app.filter('startFrom', function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  }
});
