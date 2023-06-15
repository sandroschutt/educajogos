import { ABS_PATH } from '../../../../script.js';
import { print } from '../options/print.js';

export function getOptions() {
    let options = `
    <div>
        <span>
        <img src="${ABS_PATH}/public/img/crossword.png" alt="Ícone de caça-palavras" />
        </span>
        <span>Caça-palavras</span>
        </div>
        <div class="options-links">
            <a href="${ABS_PATH}/jogos/caca-palavras/pages/criar">Criar jogo</a>
            <a href="${ABS_PATH}/jogos/caca-palavras/pages/como-jogar">Como jogar</a>
            <a href="#" id="theme">Impressão</a>
            <a href="${ABS_PATH}">educajogos</a>
        </div>
    </div>
    `;

    $('#options').html(options)

    $('#theme').click(() => {
        print();
    })
}