import { ABS_PATH } from "../../../../script.js";

export function getOptions() {
    let options = `
    <div>
        <span>
        <img src="${ABS_PATH}/public/img/assets/icons/capital-128.png" alt="logo forca" />
        </span>
        <span>Forca</span>
        </div>
        <div class="options-links">
            <!-- <a href="${ABS_PATH}/jogos/forca/pages/criar">Criar Jogo</a> -->
            <a href="${ABS_PATH}/jogos/forca/pages/como-jogar">Como jogar</a>
            <!-- <a href="#">Impressão</a> -->
            <a href="${ABS_PATH}/">educajogos</a>
        </div>
    </div>
    `;

    $('#options').html(options);

    $('span').click(() => {
        window.location.href = `${ABS_PATH}/jogos/forca/`;
    })
}