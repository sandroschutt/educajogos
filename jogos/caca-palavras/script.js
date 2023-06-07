import { getOptions } from "./functions/options/options.js";
import { addLogoLink } from "./functions/addLogoLink.js";
import { autoload } from "./functions/autoload.js";
import { startTimer, stopTimer } from "../..//public/functions/timer.js";

autoload();

$(document).ready(function () {startTimer()})

// Audio elements
const backgroundMusic = new Audio('./audio/background.mp3');
const clickAudio = new Audio('./audio/click.wav');
const correctWord = new Audio('./audio/correct-word.wav');
// const wrongWord = new Audio('./audio/wrong-word.wav');
const gameWin = new Audio("./audio/win.wav");

backgroundMusic.loop = true;
backgroundMusic.play();

const tableData = JSON.parse(localStorage.getItem("tableData"));
const words = tableData.words; // Example words
const tableSize = tableData.lineNumber; // Define the size of the table (adjust as needed
let selectedCell = [];
let foundWords = 0;

getOptions();
addLogoLink();

// Function to generate a random letter
function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Function to fill the table with random letters
function fillTableWithRandomLetters(table) {
  for (let row = 0; row < tableSize; row++) {
    for (let col = 0; col < tableSize; col++) {
      if (table[row][col] === "") {
        table[row][col] = generateRandomLetter();
      }
    }
  }
}

// Function to check if a word fits in the table at the specified position and direction
function doesWordFit(table, word, row, col, direction) {
  const wordLength = word.length;

  // Check if word fits horizontally
  if (direction === "horizontal" && col + wordLength > tableSize) {
    return false;
  }

  // Check if word fits vertically
  if (direction === "vertical" && row + wordLength > tableSize) {
    return false;
  }

  // Check if the word intersects with existing letters in the table
  for (let i = 0; i < wordLength; i++) {
    const cellRow = row + (direction === "vertical" ? i : 0);
    const cellCol = col + (direction === "horizontal" ? i : 0);
    const cellValue = table[cellRow][cellCol];

    if (cellValue !== "" && cellValue !== word[i]) {
      return false;
    }
  }

  return true;
}

// Function to render the table on the HTML page
function renderTable(table) {
  const tableElement = document.getElementById("wordTable");
  tableElement.innerHTML = ""; // Clear the existing table content

  for (let row = 0; row < tableSize; row++) {
    const tableRow = document.createElement("tr");

    for (let col = 0; col < tableSize; col++) {
      const tableCell = document.createElement("td");
      tableCell.id = Math.floor(Math.random() * 10000);
      const cellValue = table[row][col];

      tableCell.textContent = cellValue;
      tableRow.appendChild(tableCell);
    }

    tableElement.appendChild(tableRow);
  }
}

// Generate an empty table
const table = Array.from({ length: tableSize }, () =>
  Array(tableSize).fill("")
);

// Function to randomly invert words
function invertWord(word = String) {
  let inverted = Math.floor(Math.random() * 1.2);
  if (inverted == 1) {
    word = word.split("");
    word = word.reverse();
    word = word.join("");
  }

  return word;
}

// Place the words in the table
for (let word of words) {
  let wordPlaced = false;

  while (!wordPlaced) {
    const row = Math.floor(Math.random() * tableSize);
    const col = Math.floor(Math.random() * tableSize);
    const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

    if (doesWordFit(table, word, row, col, direction)) {
      word = invertWord(word);
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        table[row + (direction === "vertical" ? i : 0)][
          col + (direction === "horizontal" ? i : 0)
        ] = letter;
      }

      wordPlaced = true;
    }
  }
}

// Fill the remaining cells with random letters
fillTableWithRandomLetters(table);

// Render the table on the HTML page
renderTable(table);

// $('body').css('background-image', 'radial-gradient(circle, #3d7740, #3d7740, #244626)');
$('body').css('min-height', '100vh');
$('body').css('background-image', `url("${window.location.origin}/educajogos/public/img/chalkboard-bg.jpg")`);
$('body').css('background-repeat', 'no-repeat');
$('body').css('background-size', 'cover');
$('td').css('border','1px solid #fff')

$("td").click((event) => {
  event.target.classList.toggle("selected");
  clickAudio.play();
  let cellId = event.target.id;

  eval__selectedCell(selectedCell, cellId);
});

function eval__selectedCell(selectedCell = Array, cellId = String) {
  let result = selectedCell.includes(cellId) ? true : false;
  result
    ? selectedCell.splice(selectedCell.indexOf(cellId), 1)
    : selectedCell.push(cellId);
}

$("#find-button").on("click", function () {
  eval__userWord(selectedCell);

  if(foundWords == words.length) {
    gameWin.play();
    $("[data-toggle=modal]").click();
    let tempo = stopTimer(startTimer());
    $('.tempo .tempo-data').html(`${tempo}`)
  }

  selectedCell = []
});

function eval__userWord(selectedCell = Array) {
  let userWord = Array();

  for (const cell of selectedCell) {
    userWord.push($(`#${cell}`).text());
  }

  userWord = userWord.join('').split('').sort().join('');

  for (let word of words) {
    let originalWord = word;
    word = word.split('').sort().join("");

    if (word == userWord) {
      correctWord.play();
      $(`#${originalWord}`).css("color", "#00bf00");

      selectedCell.forEach((cell) => {
        $(`#${cell}`).css({
          "background-color": "#00bf00",
          color: "#fff",
        });
      });

      foundWords++;
    } else {
      selectedCell.forEach((cell) => {
        $(`#${cell}`).removeClass('selected');
      });
    }
  }
}

for (const word of words) {
  let html = `<li><h3 id="${word}">${word}</h3></li>`;
  $("#wordlist ul").append(html);
}
