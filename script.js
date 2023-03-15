// Déclaration des variables
// Les boutons
const newGame = document.querySelector(".buttonNewGame");
const buttonRollDice = document.querySelector(".buttonRollDice");
const buttonHold = document.querySelector(".buttonHold");
// Les scores
const scorePlayerOne = document.querySelector(".scorePlayerOne");
const scorePlayerTwo = document.querySelector(".scorePlayerTwo");
const currentNumbers = document.querySelectorAll(".currentNumber");
const currentNumberOne = document.getElementById("currentNumberOne");
const currentNumberTwo = document.getElementById("currentNumberTwo");
// Les joueurs
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
// Le dé
const dice = document.querySelector("img");

// fonction pour débuter une nouvelle partie

const startGame = () => {
    scorePlayerOne.innerText = 0;
    scorePlayerTwo.innerText = 0;
    currentNumbers.forEach((element) => (element.innerText = 0));
    playerOne.classList.add("active");
};

newGame.addEventListener("click", startGame);

// lancement du dé

let currentNumberTotal = 0;

buttonRollDice.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomDice = "images/dice-" + randomNumber + ".jpg";
    dice.setAttribute("src", randomDice);
    if (playerOne.classList.contains("active") && randomNumber != 1) {
        currentNumberTotal += randomNumber;
        currentNumberOne.innerText = currentNumberTotal;
    } else if (playerTwo.classList.contains("active") && randomNumber != 1) {
        currentNumberTotal += randomNumber;
        currentNumberTwo.innerText = currentNumberTotal;
    } else {
        changePlayerActive();
    }
});

// fonction de changement du joueur actif

const changePlayerActive = () => {
    if (playerOne.classList.contains("active")) {
        playerOne.classList.remove("active");
        playerTwo.classList.add("active");
        currentNumberOne.innerText = 0;
        currentNumberTotal = 0;
    } else {
        playerOne.classList.add("active");
        playerTwo.classList.remove("active");
        currentNumberTwo.innerText = 0;
        currentNumberTotal = 0;
    }
};

// Click du bouton Hold

buttonHold.addEventListener("click", () => {
    if (playerOne.classList.contains("active")) {
        let number = parseInt(scorePlayerOne.innerText, 10);
        number += parseInt(currentNumberOne.innerText, 10);
        scorePlayerOne.innerText = number;
        currentNumberOne.innerText = 0;
        changePlayerActive();
    } else {
        let number = parseInt(scorePlayerTwo.innerText, 10);
        number += parseInt(currentNumberTwo.innerText, 10);
        scorePlayerTwo.innerText = number;
        currentNumberTwo.innerText = 0;
        changePlayerActive();
    }
});
