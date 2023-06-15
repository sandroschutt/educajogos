import { ABS_PATH } from "../../../../script.js";

export function getOptions() {
    let options = `
    <div>
        <span>
        <img src="${ABS_PATH}/public/img/formula.png" alt="logo mestremático" />
        </span>
        <span>Acerte o cálculo</span>
        </div>
        <div class="options-links">
            <a href="${ABS_PATH}/jogos/acerte-o-calculo/pages/como-jogar">Como jogar</a>
            <a href="${ABS_PATH}/">educajogos</a>
        </div>
    </div>
    `;

    $('#options').html(options) 
}