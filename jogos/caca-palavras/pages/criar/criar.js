import { getOptions } from "../../functions/options/options.js";
import { addLogoLink } from "../../functions/addLogoLink.js";
import { ABS_PATH } from "../../../../script.js";

getOptions();
addLogoLink();

$(document).ready(function () {
  $("textarea").val("palavraum\npalavradois\npalavratres\npalavraquatro");

  $("#submit-button").click((event) => {
    saveData(event);
  });
});

function saveData(event) {
  event.preventDefault();

  const wordInput = document.getElementById("wordInput").value;
  let words = wordInput.toUpperCase().split("\n");

  const wml = Math.max(...words.map((word) => word.length));
  const lineNumber = Math.ceil(wml * 1.5);

  const data = {
    lineNumber,
    words,
  };

  localStorage.setItem("tableData", JSON.stringify(data));

  // Redirect to another page or perform any other action here
  // For demonstration purposes, we'll just log the data to the console
  // console.log("Data saved:", data);

  window.location.href = `${ABS_PATH}/jogos/caca-palavras`;
}
