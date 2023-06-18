import { getOptions } from "../forca/functions/options/options.js";
getOptions();

const deafultWords = [
  { word: 'gato', tip: 'animal de estimação' },
  { word: 'casa', tip: 'moradia' },
  { word: 'amor', tip: 'sentimento afetivo' },
  { word: 'flor', tip: 'parte de uma planta' },
  { word: 'vida', tip: 'existência' },
  { word: 'sol', tip: 'estrela central do sistema solar' },
  { word: 'feliz', tip: 'contente' },
  { word: 'correr', tip: 'movimentar-se rapidamente' },
  { word: 'laranja', tip: 'fruta cítrica' },
  { word: 'chuva', tip: 'precipitação de água do céu' },
  { word: 'azul', tip: 'cor do céu em um dia ensolarado' },
  { word: 'fogo', tip: 'reação química de combustão' },
  { word: 'tempo', tip: 'medida da duração das coisas' },
  { word: 'doce', tip: 'alimento açucarado' },
  { word: 'novo', tip: 'recente' },
  { word: 'amigo', tip: 'pessoa querida' },
  { word: 'terra', tip: 'planeta habitado pelos seres humanos' },
  { word: 'arte', tip: 'expressão criativa' },
  { word: 'lua', tip: 'satélite natural da Terra' },
  { word: 'frio', tip: 'baixa temperatura' },
  { word: 'mente', tip: 'assento da atividade mental' },
  { word: 'mar', tip: 'grande massa de água salgada' },
  { word: 'verde', tip: 'cor das folhas das plantas' },
  { word: 'sonho', tip: 'sequência de imagens durante o sono' },
  { word: 'falar', tip: 'expressar-se oralmente' },
  { word: 'pão', tip: 'alimento básico' },
  { word: 'branco', tip: 'cor pura' },
  { word: 'alegria', tip: 'sentimento de felicidade' },
  { word: 'trabalho', tip: 'atividade laboral' },
  { word: 'riso', tip: 'expressão de alegria' },
  { word: 'computador', tip: 'máquina eletrônica de processamento de dados' },
  { word: 'janela', tip: 'abertura em uma parede para entrada de luz e ar' },
  { word: 'festa', tip: 'celebração ou comemoração' },
  { word: 'praia', tip: 'faixa de areia à beira-mar' },
  { word: 'amarelo', tip: 'cor vibrante' },
  { word: 'verão', tip: 'estação do ano' },
  { word: 'doce', tip: 'sabor açucarado' },
  { word: 'beleza', tip: 'característica estética agradável' },
  { word: 'cachorro', tip: 'animal doméstico' },
  { word: 'estudar', tip: 'adquirir conhecimento' },
  { word: 'comer', tip: 'ingerir alimentos' },
  { word: 'sorriso', tip: 'expressão facial de alegria' },
  { word: 'livro', tip: 'obra escrita' },
  { word: 'viagem', tip: 'deslocamento para outro lugar' },
  { word: 'bola', tip: 'objeto esférico usado em jogos' },
  { word: 'família', tip: 'grupo de pessoas relacionadas' },
  { word: 'estrela', tip: 'corpo celeste luminoso' },
  { word: 'noite', tip: 'período entre o pôr do sol e o amanhecer' },
  { word: 'vermelho', tip: 'cor intensa' },
  { word: 'luz', tip: 'forma de energia radiante' },
  { word: 'amizade', tip: 'relação de afeto entre pessoas' },
  { word: 'música', tip: 'combinação de sons agradáveis' },
  { word: 'sono', tip: 'estado de repouso' },
  { word: 'porta', tip: 'acesso a um ambiente' },
  { word: 'comida', tip: 'alimento' },
  { word: 'tempo', tip: 'condição climática' },
  { word: 'roupa', tip: 'vestuário' },
  { word: 'amarelo', tip: 'cor quente' },
  { word: 'beber', tip: 'ingerir líquidos' },
  { word: 'cidade', tip: 'aglomerado urbano' },
  { word: 'escola', tip: 'instituição de ensino' },
  { word: 'espelho', tip: 'superfície refletora' },
  { word: 'arte', tip: 'manifestação do belo' },
  { word: 'brincar', tip: 'divertir-se' },
  { word: 'verdade', tip: 'caráter de algo verdadeiro' },
  { word: 'verde', tip: 'cor da natureza' },
  { word: 'amor', tip: 'sentimento de afeto' },
  { word: 'carro', tip: 'veículo automotor' },
  { word: 'triste', tip: 'sentimento de melancolia' },
  { word: 'amor', tip: 'carinho por alguém' },
  { word: 'andar', tip: 'mover-se a pé' },
  { word: 'trabalho', tip: 'ocupação remunerada' },
  { word: 'estudo', tip: 'processo de aprendizagem' },
  { word: 'céu', tip: 'parte visível da atmosfera' },
  { word: 'lua', tip: 'astro que orbita a Terra' },
  { word: 'festa', tip: 'celebração' },
  { word: 'rio', tip: 'curso de água' },
  { word: 'calor', tip: 'alta temperatura' },
  { word: 'chuva', tip: 'precipitação de água' },
  { word: 'mundo', tip: 'planeta Terra' },
  { word: 'sorrir', tip: 'expressar alegria com o rosto' },
  { word: 'viagem', tip: 'deslocamento para outro lugar' },
  { word: 'música', tip: 'arte dos sons' },
  { word: 'comida', tip: 'alimento' },
  { word: 'escola', tip: 'instituição de ensino' },
  { word: 'amor', tip: 'sentimento afetivo' },
  { word: 'trabalho', tip: 'atividade laboral' },
  { word: 'lua', tip: 'satélite natural da Terra' },
  { word: 'sorriso', tip: 'expressão facial de alegria' },
  { word: 'tempo', tip: 'medida da duração das coisas' },
  { word: 'falar', tip: 'expressar-se oralmente' },
  { word: 'triste', tip: 'sentimento de melancolia' },
  { word: 'estudo', tip: 'processo de aprendizagem' },
  { word: 'rio', tip: 'curso de água' },
  { word: 'casa', tip: 'moradia' },
  { word: 'beber', tip: 'ingerir líquidos' },
  { word: 'amigo', tip: 'pessoa querida' },
  { word: 'carro', tip: 'veículo automotor' },
  { word: 'calor', tip: 'alta temperatura' },
  { word: 'chuva', tip: 'precipitação de água do céu' },
  { word: 'festa', tip: 'celebração ou comemoração' },
  { word: 'laranja', tip: 'fruta cítrica' },
  { word: 'céu', tip: 'parte visível da atmosfera' },
  { word: 'correr', tip: 'movimentar-se rapidamente' },
  { word: 'feliz', tip: 'contente' },
  { word: 'comida', tip: 'alimento' },
  { word: 'doce', tip: 'alimento açucarado' },
  { word: 'brincar', tip: 'divertir-se' },
  { word: 'livro', tip: 'obra escrita' },
  { word: 'viagem', tip: 'deslocamento para outro lugar' },
  { word: 'cidade', tip: 'aglomerado urbano' },
  { word: 'carro', tip: 'veículo automotor' },
  { word: 'espelho', tip: 'superfície refletora' },
  { word: 'triste', tip: 'sentimento de melancolia' },
  { word: 'mundo', tip: 'planeta Terra' },
  { word: 'vermelho', tip: 'cor intensa' },
  { word: 'noite', tip: 'período entre o pôr do sol e o amanhecer' },
  { word: 'verde', tip: 'cor da natureza' },
  { word: 'tempo', tip: 'condição climática' },
  { word: 'andar', tip: 'mover-se a pé' },
  { word: 'sono', tip: 'estado de repouso' },
  { word: 'roupa', tip: 'vestuário' },
  { word: 'verão', tip: 'estação do ano' },
  { word: 'verde', tip: 'cor das folhas das plantas' },
  { word: 'fogo', tip: 'reação química de combustão' },
  { word: 'amarelo', tip: 'cor vibrante' },
  { word: 'sonho', tip: 'sequência de imagens durante o sono' },
  { word: 'céu', tip: 'parte visível da atmosfera' },
  { word: 'frio', tip: 'baixa temperatura' },
  { word: 'doce', tip: 'sabor açucarado' },
  { word: 'feliz', tip: 'contente' },
  { word: 'verde', tip: 'cor das folhas das plantas' },
  { word: 'azul', tip: 'cor do céu em um dia ensolarado' },
  { word: 'amor', tip: 'sentimento afetivo' },
  { word: 'calor', tip: 'alta temperatura' },
  { word: 'tempo', tip: 'medida da duração das coisas' },
  { word: 'alegria', tip: 'sentimento de felicidade' },
  { word: 'janela', tip: 'abertura em uma parede para entrada de luz e ar' },
  { word: 'verde', tip: 'cor das folhas das plantas' },
  { word: 'trabalho', tip: 'atividade laboral' },
  { word: 'riso', tip: 'expressão de alegria' },
  { word: 'falar', tip: 'expressar-se oralmente' },
  { word: 'pão', tip: 'alimento básico' },
  { word: 'branco', tip: 'cor pura' },
  { word: 'alegria', tip: 'sentimento de felicidade' },
  { word: 'trabalho', tip: 'atividade laboral' },
  { word: 'riso', tip: 'expressão de alegria' },
  { word: 'computador', tip: 'máquina eletrônica de processamento de dados' },
  { word: 'janela', tip: 'abertura em uma parede para entrada de luz e ar' },
  { word: 'festa', tip: 'celebração ou comemoração' },
  { word: 'praia', tip: 'faixa de areia à beira-mar' },
  { word: 'amarelo', tip: 'cor vibrante' },
  { word: 'verão', tip: 'estação do ano' },
  { word: 'doce', tip: 'sabor açucarado' },
  { word: 'beleza', tip: 'característica estética agradável' },
  { word: 'cachorro', tip: 'animal doméstico' },
  { word: 'estudar', tip: 'adquirir conhecimento' },
  { word: 'comer', tip: 'ingerir alimentos' },
  { word: 'sorriso', tip: 'expressão facial de alegria' },
  { word: 'livro', tip: 'obra escrita' },
  { word: 'viagem', tip: 'deslocamento para outro lugar' },
  { word: 'bola', tip: 'objeto esférico usado em jogos' },
  { word: 'família', tip: 'grupo de pessoas relacionadas' },
  { word: 'estrela', tip: 'corpo celeste luminoso' },
  { word: 'noite', tip: 'período entre o pôr do sol e o amanhecer' },
  { word: 'vermelho', tip: 'cor intensa' },
  { word: 'luz', tip: 'forma de energia radiante' },
  { word: 'amizade', tip: 'relação de afeto entre pessoas' },
  { word: 'música', tip: 'combinação de sons agradáveis' },
  { word: 'sono', tip: 'estado de repouso' },
  { word: 'porta', tip: 'acesso a um ambiente' },
  { word: 'comida', tip: 'alimento' },
  { word: 'tempo', tip: 'condição climática' },
  { word: 'roupa', tip: 'vestuário' },
  { word: 'amarelo', tip: 'cor quente' },
  { word: 'beber', tip: 'ingerir líquidos' },
  { word: 'cidade', tip: 'aglomerado urbano' },
  { word: 'escola', tip: 'instituição de ensino' },
  { word: 'espelho', tip: 'superfície refletora' },
  { word: 'arte', tip: 'manifestação do belo' },
  { word: 'brincar', tip: 'divertir-se' },
  { word: 'verdade', tip: 'caráter de algo verdadeiro' },
  { word: 'verde', tip: 'cor da natureza' },
  { word: 'amor', tip: 'sentimento de afeto' },
  { word: 'carro', tip: 'veículo automotor' },
  { word: 'triste', tip: 'sentimento de melancolia' },
  { word: 'amor', tip: 'carinho por alguém' },
  { word: 'andar', tip: 'mover-se a pé' },
  { word: 'trabalho', tip: 'ocupação remunerada' },
  { word: 'estudo', tip: 'processo de aprendizagem' },
  { word: 'céu', tip: 'parte visível da atmosfera' },
  { word: 'lua', tip: 'astro que orbita a Terra' },
  { word: 'festa', tip: 'celebração' },
  { word: 'rio', tip: 'curso de água' },
  { word: 'calor', tip: 'alta temperatura' },
  { word: 'chuva', tip: 'precipitação de água' },
  { word: 'mundo', tip: 'planeta Terra' },
  { word: 'sorrir', tip: 'expressar alegria com o rosto' },
  { word: 'verão', tip: 'estação do ano' },
  { word: 'azul', tip: 'cor do céu em um dia ensolarado' },
  { word: 'feliz', tip: 'sentimento de alegria' },
  { word: 'laranja', tip: 'fruta cítrica' },
  { word: 'correr', tip: 'mover-se rapidamente' },
  { word: 'fogo', tip: 'reação química de combustão' },
  { word: 'sonho', tip: 'sequência de imagens durante o sono' },
  { word: 'frio', tip: 'baixa temperatura' },
  { word: 'alegria', tip: 'sentimento de felicidade' },
  { word: 'janela', tip: 'abertura em uma parede para entrada de luz e ar' },
  { word: 'alegria', tip: 'sentimento de felicidade' },
  { word: 'riso', tip: 'expressão de alegria' },
  { word: 'pão', tip: 'alimento' },
  { word: 'branco', tip: 'cor pura' },
  { word: 'computador', tip: 'máquina eletrônica de processamento de dados' },
  { word: 'praia', tip: 'costa marítima' } 
]


let tries = 3;
let points = 0;
let index = Math.floor(Math.random() * deafultWords.length);
let wordObject = deafultWords[index];
let word = deafultWords[index].word.split("");
let victory = word.length;

let tip = `
<div class="row d-flex mb-3 text-center text-white">
  <h5 class="tip"></h5>
</div>  
`;

$('#game').append(tip);
$('.tip').text(wordObject.tip.charAt(0).toUpperCase() + wordObject.tip.slice(1));

word.forEach(() => {
  let id = Math.floor(Math.random() * 0xfffff * 1000000).toString(16);
  let input = `
    <div class="col">
        <input type="text" class="form-control enabled" id="${id}" maxlength="1">
    </div>`;
  $("#game").append(input);
});

$(".found-button").append('<button class="btn btn-primary">Achei!</button>');

$("#forca button").click(() => {
  let answer = $("input:text").map(function () {
      if($(this).hasClass('enabled')) {
        return {valor : $(this).val(), id : $(this).attr('id')};
      }
  });

  evaluateUserAnswer(answer);
  tries--;
  tries == 0 ? lostGame() : false;
  console.log('tries:', tries);
});

function evaluateUserAnswer(answer = Array()) {
    for(let i = 0; i < answer.length; i++) {
        console.table({letra_C: word[i], letra_A: answer[i].valor, points: points,tries: tries,victory: victory})
        word[i] == answer[i].valor && correct(answer[i]);
    }

    points >= victory ? alert('vitória') : wrong();
}

function correct(answer){
    points += 1;
    let elementID = '#' + answer.id;
    let element = $(elementID);
    element.css({'background-color' : 'white', 'color' : 'green'})
    element.attr('disabled', 'disabled')
    element.addClass('disabled')
    element.removeClass('enabled');
}

function wrong(){
    $('#chances div:first-child').remove();
    $('.enabled').val("");
}

function lostGame() {
  let lostGameMessage = '<h3 class="text-center text-white">Você perdeu... :(</h3>';
  alert('perdeu')
  $('input:text').attr('disabled', 'disabled')
  $('#chances').append(lostGameMessage)
}
