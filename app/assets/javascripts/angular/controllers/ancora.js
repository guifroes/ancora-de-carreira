'use strict';

var app = angular.module('ancora').controller('MainCtrl', ['$scope', '$http', function(scope, http) { 

  scope.currentPage = 0;
  scope.pageSize = 5;
  scope.numberOfPages=function(){
    return Math.ceil(scope.answer.questions.length/scope.pageSize);
  }

  scope.steps = ['objective', 'inventory', 'instructions', 'personal', 'questions1', 'questions2', 'questions3', 'questions4', 'questions5', 'questions6', 'questions7', 'questions8', 'select'];
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
    return (scope.isLastStep()) ? 'Ver o resultado' : 'Próximo';
  };

  scope.handlePrevious = function() {
    scope.step -= (scope.isFirstStep()) ? 0 : 1;
  };

  scope.handleNext = function(dismiss) {
    if(scope.step === 11) {
      var temp = removeEmptyAnswers(scope.answer.questions);
      var sortedAnswers = temp.sort(compareAnswers);

      scope.availableAnswers = sortedAnswers;
      scope.step +=1;
    }

    if(scope.isLastStep()) {
      dismiss();
    } else {
      scope.step += 1;
    }
  };

  var removeEmptyAnswers = function(array) {
    var result = [];

    for(var i = 0; i < array.length; i++) {
      if(array[i].answer !== undefined) {
        result.push({text: array[i].text, value: array[i].answer, selected: false});
      }
    }
    return result;
  };

  var getAnswersValues = function(array) {
    var result = [];

    for(var i = 0; i < array.length; i++) {
      if(array[i].answer !== undefined) {
        result.push({value: array[i].answer});
      }
    }
    return result;
  };


  scope.create = function() {
    var answers = getAnswersValues(scope.answer.questions);

    var data = {
      answer: {
                name: scope.answer.name,
                email: scope.answer.email,
                institution: scope.answer.institution,
                course: scope.answer.course,
                question_answers_attributes: answers,
                final_result: "bla bla"
    }};

    http.post("/api/answers/", data);
  };

  var questions = [{id: 1, text: 'Sonho em ser tão bom no que faço de tal forma que meus conhecimentos especializados sejam constantemente procurados.'}, 
                   {id: 2, text: 'Sinto-me mais realizado em meu trabalho quando sou capaz de integrar e gerenciar o esforço dos outros.'},
                   {id: 3, text: 'Sonho em ter uma carreira que me dê a liberdade de fazer o trabalho à minha maneira de no tempo por mim programado.'},
                   {id: 4, text: "Segurança e estabilidade são mais importantes para mim do que liberdade e autonomia."},
                   {id: 5, text: "Estou sempre procurando ideias que me permitam iniciar meu próprio negócio."},
                   {id: 6, text: "Sinto-me bem em minha carreira apenas quando tenho a sensação de ter feito uma contribuição real para o bem da sociedade."},
                   {id: 7, text: "Sonho com uma carreira na qual eu possa solucionar problemas ou vencer com situações extremamente desafiadoras."},
                   {id: 8, text: "Preferiria deixar meu emprego a ser colocado em um trabalho que comprometa minha capacidade de me dedicar aos assuntos pessoais e familiares."},
                   {id: 9, text: "Sinto-me sucedido em minha carreira apenas quando posso desenvolver minhas habilidades técnicas ou funcionais a um nível de competência muito alto."},
                   {id: 10, text: "Sonho em dirigir uma organização complexa e tomar decisões que afetem muitas pessoas."},
                   {id: 11, text: "Sinto-me mais realizado em meu trabalho quanto tenho total liberdade de definir minhas próprias tarefas, horários e procedimentos."},
                   {id: 12, text: "Preferiria deixar meu emprego a aceitar uma tarefa que possa colocar em risco minha segurança na organização."},
                   {id: 13, text: "Montar meu próprio negócio é mais importante para mim do que atingir uma alta posição gerencial como empregado."},
                   {id: 14, text: "Sinto-me mais realizado em minha carreira quando posso utilizar meus talentos a serviço dos outros."},
                   {id: 15, text: "Sinto-me realizado em minha carreira apenas quando enfrento e supero desafios extremamente difíceis."},
                   {id: 16, text: "Sonho com uma carreira que me permita integrar minhas necessidades pessoais, familiares e de trabalho."},
                   {id: 17, text: "Tornar-me um gerente técnico em minha área de especialização é mais atraente para mim do que tornar-me um gerente geral."},
                   {id: 18, text: "Sentir-me-ei bem sucedido em minha carreira apenas quando me tornar um gerente geral em alguma organização. "},
                   {id: 19, text: "Sentir-me-ei bem sucedido em minha carreira apenas quando alcançar total autonomia e liberdade."},
                   {id: 20, text: "Procuro trabalhos em organizações que me deem senso de segurança e estabilidade."},
                   {id: 21, text: "Sinto-me realizado em minha carreira quando tenho a oportunidade de construir alguma coisa que seja resultado unicamente de minhas próprias ideias e esforços."},
                   {id: 22, text: "Utilizar minhas habilidades para tornar o mundo um lugar melhor para se viver e trabalhar, é mais importante para mim do que alcançar uma posição gerencial de alto nível."},
                   {id: 23, text: "Sinto-me mais realizado em minha carreira quando solucionei problemas insolúveis ou venci o que aparentemente era impossível de ser vencido."},
                   {id: 24, text: "Sinto-me bem sucedido na vida apenas quando fui capaz de equilibrar minhas necessidades pessoais, familiares e de carreira."},
                   {id: 25, text: "Preferiria deixar meu emprego do que aceitar uma tarefa de rodízio que me afaste da minha área de experiência."},
                   {id: 26, text: "Tornar-me um gerente geral é mais atraente para mim do que tornar-me um gerente técnico em minha área de especialização."},
                   {id: 27, text: "Para mim, poder fazer um trabalho à minha própria maneira, sem regras e restrições, é mais importante do que segurança."},
                   {id: 28, text: "Sinto-me mais realizado em meu trabalho quando percebo que tenho total segurança financeira e estabilidade no trabalho"},
                   {id: 29, text: "Sinto-me bem sucedido em meu trabalho apenas quando posso criar ou construir alguma coisa que seja inteiramente de minha autoria."},
                   {id: 30, text: "Sonho em ter uma carreira que faça uma real contribuição à humanidade e à sociedade."},
                   {id: 31, text: "Procuro oportunidades de trabalho que desafiem fortemente minhas habilidades para solucionar problemas."},
                   {id: 32, text: "Equilibrar as exigências da minha vida pessoal e profissional é mais importante do que alcançar alta posição gerencial."},
                   {id: 33, text: "Sinto-me plenamente realizado em meu trabalho quando sou capaz de empregar minhas habilidades e talentos especiais."},
                   {id: 34, text: "Preferiria deixar minha organização a aceitar um emprego que me afastasse da trajetória de gerência geral."},
                   {id: 35, text: "Preferiria deixar minha organização a aceitar um emprego que reduza minha autonomia e liberdade."},
                   {id: 36, text: "Sonho em ter uma carreira que me dê senso de segurança e estabilidade."},
                   {id: 37, text: "Sonho em iniciar e montar meu próprio negócio."},
                   {id: 38, text: "Preferiria deixar minha organização a aceitar uma tarefa que prejudique minha capacidade de servir aos outros."},
                   {id: 39, text: "Trabalhar em problemas praticamente insolúveis para mim é mais importante do que alcançar uma posição gerencial de alto nível."},
                   {id: 40, text: "Sempre procurei oportunidades de trabalho que minimizassem interferências com assuntos pessoais e familiares."}];

  function compareAnswers(a, b) {
    if(a.value < b.value)
      return 1;
    if(a.value > b.value)
      return -1;
    return 0;
  }
  scope.answer = {name:"", email:"", institution: "", course: "", questions: questions};
}]);

app.filter('startFrom', function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  }
});
