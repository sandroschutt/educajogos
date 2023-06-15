import { ABS_PATH } from "../../../script.js";

export function addLogoLink() {
  $("#options div").click((event) => {
    window.location.href = `${ABS_PATH}/jogos/caca-palavras`;
  });
}
