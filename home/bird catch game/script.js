const screens = document.querySelectorAll(".screen");
const chooseCharacterButtons = document.querySelectorAll(
  ".choose-character-btn"
);
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selectedCharacter = {};

startButton.addEventListener("click", () => screens[0].classList.add("up"));

const increaseScore = () => {
  score++;
  if (score > 19) message.classList.add("visible");
  scoreElement.innerHTML = `Score: ${score}`;
};

const addCharacters = () => {
  setTimeout(createCharacter, 1000);
  setTimeout(createCharacter, 1500);
};

const catchCharacter = function () {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addCharacters();
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};

const createCharacter = () => {
  const character = document.createElement("div");
  character.classList.add("character");
  const { x, y } = getRandomLocation();
  character.style.top = `${y}px`;
  character.style.left = `${x}px`;
  character.innerHTML = `<img src="${selectedCharacter.src}" 
      alt="${selectedCharacter.alt}" 
      style="transform: rotate(${Math.random() * 360}deg)" />`;
  character.addEventListener("click", catchCharacter);
  gameContainer.appendChild(character);
};

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeElement.innerHTML = `Time: ${m}:${s}`;
  seconds++;
};

const startGame = () => setInterval(increaseTime, 1000);

chooseCharacterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    selectedCharacter = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createCharacter, 1000);
    startGame();
  });
});
