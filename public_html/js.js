let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const paper_div = document.getElementById("p");
const stone_div = document.getElementById("r");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['p', 'r', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Stone";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". <br> You win!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " lose against " + convertToWord(userChoice) + ". <br> You lose ;(";
}

function draw(userChoice, computerChoice) {
    
    result_p.innerHTML = convertToWord(computerChoice) + " vs " + convertToWord(userChoice) + ". <br> It's a draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    } 
}

function main() {
    stone_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();