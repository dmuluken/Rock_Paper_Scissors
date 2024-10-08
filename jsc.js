// This function gets a random number between 0 and 2. Later 0 will be assignen to Rock 1 to Paper and 2 to Scissors.

function getComputerChoice() {
    return Math.round(Math.random() * 2);
}

// This function gets a users choice and changes into a number between 0 and 2.

function getHumanChoice() {
    let code = 0;
    let answer = "";
    while (true) {
        answer = prompt("Please choose between Rock, Paper, and Scissors?");
        answer = answer.toLowerCase();
        if (answer == "rock") {
            code = 0;
            break;
        } else if (answer == "paper") {
            code = 1;
            break;
        } else if (answer == "scissors") {
            code = 2;
            break;
        } else {
            console.log("Wrong choice please try again.");
        }
    }
    return code;
}

let humanScore = 0;
let computerScore = 0;

// This function is used to play one round as per the rules of Rock, Paper, Scissors. Rock crushes scissors, scissors cuts paper and paper covers rock. If user and computer draw the same choice user is asked to choose again. 

function playRound(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        console.log("Choice same with computer, please try again?");
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } else if (humanSelection == 0 && computerSelection == 1) {
        console.log("You loose! Paper covers Rock!");
        computerScore += 1;
    } else if (humanSelection == 1 && computerSelection == 0) {
        console.log("You win! Paper covers Rock!");
        humanScore += 1;
    } else if (humanSelection == 1 && computerSelection == 2) {
        console.log("You loose! Scissors cuts Paper!");
        computerScore += 1;
    } else if (humanSelection == 2 && computerSelection == 1) {
        console.log("You win! Scissors cuts Paper!");
        humanScore += 1;
    } else if (humanSelection == 2 && computerSelection == 0) {
        console.log("You loose! Rock crushes Scissors!");
        computerScore += 1;
    } else {
        console.log("You win! Rock crushes Scissors!");
        humanScore += 1;
    }
}

// The game will be played five times.

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    };
}

playGame();

console.log(`You have won ${humanScore} times where the computer has won ${computerScore} times.`);
