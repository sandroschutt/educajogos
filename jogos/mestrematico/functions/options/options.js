export function getOptions() {
    let options = `
    <div>
        <span>
        <img src="${window.location.origin}/educajogos/public/img/formula.png" alt="logo mestremático" />
        </span>
        <span>Acerte o cálculo</span>
        </div>
        <div class="options-links">
            <a href="${window.location.origin}/educajogos/jogos/acerte-o-calculo/pages/como-jogar">Como jogar</a>
            <a href="${window.location.origin}/educajogos/">educajogos</a>
        </div>
    </div>
    `;

    $('#options').html(options) 
}