import { print } from '../options/print.js';

export function getOptions() {
    let options = `
    <div>
        <span>
        <img src="${window.location.origin}/educajogos/public/img/crossword.png" alt="Ícone de caça-palavras" />
        </span>
        <span>Caça-palavras</span>
        </div>
        <div class="options-links">
            <a href="${window.location.origin}/educajogos/jogos/caca-palavras/pages/criar">Criar jogo</a>
            <a href="${window.location.origin}/educajogos/jogos/caca-palavras/pages/como-jogar">Como jogar</a>
            <a href="#" id="theme">Impressão</a>
            <a href="${window.location.origin}/educajogos">educajogos</a>
        </div>
    </div>
    `;

    $('#options').html(options)

    $('#theme').click(() => {
        print();
    })
}