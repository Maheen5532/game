const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// ----Computer choice ------------
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
};

// -------user choice-------------
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// -------conditions------
const drawGame = () => {
    console.log('Draw game');
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = "orange";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


