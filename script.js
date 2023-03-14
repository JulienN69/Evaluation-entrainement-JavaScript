// Au clique sur New Game, on réinitialise tous les scores à zéro,
// le joueur actif est player 1.
//
// Au clique sur Roll Dice, le dé change aléatoirement et
// sa valeur s'ajoute à la current du joueur actif. Si un 1 sort la current
// revient à zéro et on change de joueur actif.
// Si le joueur actif clique sur Hold, la current s'ajoute à ses points,
// repasse à zéro, et on change de joueur actif.
//
//
//

// Déclaration des variables

const newGame = document.querySelector(".buttonNewGame");
const scorePlayerOne = document.querySelector(".scorePlayerOne");
const scorePlayerTwo = document.querySelector(".scorePlayerTwo");
const currentNumbers = document.querySelectorAll(".currentNumber");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const currentNumberOne = document.getElementById("currentNumberOne");
const currentNumberTwo = document.getElementById("currentNumberTwo");

// fonction pour débuter une nouvelle partie

const startGame = () => {
    scorePlayerOne.innerText = 0;
    scorePlayerTwo.innerText = 0;
    currentNumbers.forEach((element) => (element.innerText = 0));
    playerOne.classList.add("active");
};

newGame.addEventListener("click", startGame);

// fonction de lancement du dé

let currentNumberTotal = 0;
const dice = document.querySelector("img");
const buttonRollDice = document.querySelector(".buttonRollDice");

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

// ajout de la valeur du dé à la current du joueur actif

const changePlayerActive = () => {
    if (playerOne.classList.contains("active")) {
        playerOne.classList.remove("active");
        playerTwo.classList.add("active");
    } else {
        playerOne.classList.add("active");
        playerTwo.classList.remove("active");
    }
};
