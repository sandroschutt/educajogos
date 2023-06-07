export function Nav() {
  let content = `
    <a class="navbar-brand logo" href="${window.location.origin}/educajogos/">educajogos</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Jogos
            </a>
            <div class="dropdown-menu bg-light bg-gradient" aria-labelledby="navbarDropdownMenuLink" style="--bs-bg-opacity: .95;">
              <a class="dropdown-item text-secondary" href="./jogos/caca-palavras">Caça-palavras</a>
              <a class="dropdown-item text-secondary" href="./jogos/acerte-o-calculo">Mestremático</a>
              <!-- <a class="dropdown-item text-secondary" href="./jogos/forca">Forca</a>
              <a class="dropdown-item text-secondary" href="#">Something else here</a> -->
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./sobre">Sobre</a>
        </li>
        </ul>
    </div>
    `;

  $("nav").html(content);
}
