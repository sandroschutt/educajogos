import { getOptions } from "./functions/options/options.js";
// import { addLogoLink } from "./functions/addLogoLink.js";

let score = {
  acertos: 0,
  calculos: [],
  respostas: [],
  gabarito: [],
};

getOptions();
createCalcView();

function createCalcView() {
  // gerar numeros aleatorios de um a dez
  let n1 = randomNumber(10);
  let n2 = randomNumber(10);

  function randomNumber(limit = int) {
    return Math.floor(Math.random() * limit);
  }
  // selecionar operador aritimético aleatoriamente
  let operadores = ["+", "-", "*", "/"];
  let operador = operadores[randomNumber(3)];

  function randomCalc(n1, n2) {
    switch (operador) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "/":
        return n1 / n2;
    }
  }

  let calc = randomCalc(n1, n2);

  // realizar o cálculo e salvar o resultado
  let answers = Array(calc, randomNumber(calc), randomNumber(calc));

  answers = answers.sort();

  // mostrar os númreos na tela
  let operacao = n1 + " " + operador + " " + n2;
  $(".question h1").text(`${operacao} = ?`);
  $(".a1").text(answers[0]);
  $(".a2").text(answers[1]);
  $(".a3").text(answers[2]);

  // push right answer to array
  score.gabarito.push(calc);
  // push calc to array
  score.calculos.push(operacao);

  handleAnswers(score, calc, operacao, ".a1");
  handleAnswers(score, calc, operacao, ".a2");
  handleAnswers(score, calc, operacao, ".a3");
}

function handleAnswers(
  score = Object.JSON,
  calc = Int,
  operacao = String,
  aN = String
) {
  $(aN).click((event) => {
    if (parseInt(event.target.innerText) == calc) {
      score.acertos += 1;
    }

    score.respostas.push(event.target.innerText);

    createCalcView();

    console.log(score, score.calculos.length);
  });
}
