// This function gets a random number between 0 and 2. Later 0 will be assignen to Rock 1 to Paper and 2 to Scissors.

function getComputerChoice() {
    return Math.floor(Math.random() * (3));
}

// This function gets a users choice and changes into a number between 0 and 2.

let inputs = document.querySelector(".inputs");
let output = document.querySelector(".output");
let reset = document.querySelector(".reset");

const winner = document.createElement("p");
output.appendChild(winner);

inputs.addEventListener("click", (event) => {
    let target = event.target;
    let code = 1;

    switch (target.id) {
        case 'rock':
            code = 0;
            break;
        case 'paper':
            code = 1;
            break;
        case 'scissors':
            code = 2;
            break;
    }
    const computerSelection = getComputerChoice();
    playRound(code, computerSelection);
})

let humanScore = 0;
let computerScore = 0;
let draw = 0;

// This function is used to play one round as per the rules of Rock, Paper, Scissors. Rock crushes scissors, scissors cuts paper and paper covers rock. If user and computer draw the same choice user is asked to choose again. 

function playRound(humanSelection, computerSelection) {


    if (humanSelection == computerSelection) {
        draw += 1;
        winner.innerText = `You have won ${humanScore} times, the computer has won ${computerScore} times. You have drawn ${draw} times.`;
    } else if (humanSelection == 0 && computerSelection == 1) {
        computerScore += 1;
        winner.innerText = `You have won ${humanScore} times, the computer has won ${computerScore} times. You have drawn ${draw} times.`;
    } else if (humanSelection == 1 && computerSelection == 0) {
        humanScore += 1;
        winner.innerText = `You have won ${humanScore} times, the computer has won ${computerScore} times. You have drawn ${draw} times.`;
    } else if (humanSelection == 1 && computerSelection == 2) {
        computerScore += 1;
        winner.innerText = `You have won ${humanScore} times, the computer has won ${computerScore} times. You have drawn ${draw} times.`;
    } else if (humanSelection == 2 && computerSelection == 1) {
        humanScore += 1;
        winner.innerText = `You have won ${humanScore} times, the computer has won ${computerScore} times. You have drawn ${draw} times.`;
    } else if (humanSelection == 2 && computerSelection == 0) {
        computerScore += 1;
        winner.innerText = `You have won ${humanScore} times, the computer has won ${computerScore} times. You have drawn ${draw} times.`;
    } else {
        humanScore += 1;
        winner.innerText = `You have won ${humanScore} times, the computer has won ${computerScore} times. You have drawn ${draw} times.`;
    }

    if (humanScore == 5) {
        winner.innerText = "Congratulations! You have won!";
        let resetButton = document.createElement("button");
        resetButton.innerText = "Reset";
        reset.appendChild(resetButton);
        resetButton.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            winner.innerText = "";
            reset.removeChild(resetButton);
        })
    } else if (computerScore == 5) {
        winner.innerText = "Sorry! The computer has won!";
        let resetButton = document.createElement("button");
        resetButton.innerText = "Reset";
        reset.appendChild(resetButton);
        resetButton.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            winner.innerText = "";
            reset.removeChild(resetButton);
        })
    }
}

