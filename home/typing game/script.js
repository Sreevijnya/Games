const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");

// List of words for game
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "accommodating",
  "bibliography",
  "communication",
  "congratulation",
  "deconstruction",
  "extraordinary",
  "infrastructure",
  "multicultural",
  "nonrefundable",
  "optimization",
  "revolutionary",
  "satisfaction",
  "teleconference",
  "unbelievable",
  "verification",
  "wonderfulness",
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "frog",
  "grape",
  "house",
  "igloo",
  "jacket",
  "kangaroo",
  "lemon",
  "monkey",
  "notebook",
  "octopus",
  "penguin",
  "quilt",
  "rabbit",
  "sunshine",
  "tiger",
  "umbrella",
  "violin",
  "watermelon",
  "xylophone",
  "yacht",
  "zebra",
  "astronaut",
  "bicycle",
  "caterpillar",
  "dinosaur",
  "engine",
  "firetruck",
  "garden",
  "helicopter",
  "iceberg",
  "jungle",
  "kite",
  "lantern",
];

let randomWord;
let score = 0;
let time = 30;

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="history.go(0)">Play Again</button>
  `;
  endgameElement.style.display = "flex";
}

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    e.target.value = "";
    addWordToDom();
    updateScore();
  }
});

addWordToDom();
text.focus();
