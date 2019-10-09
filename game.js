// Computer Choices
    let answers = ["rock",
"paper",
"scissors"];

    let cScore = 0;
    let pScore = 0;

    // Computer randomized choice
    function computerPlay () {
        return (answers[Math.floor(Math.random() * answers.length)]);
    }

    // One round of the game comparing choices between computer and player
    function playRound (playerSelection, computerSelection) {
        var playerSelection = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
        var computerSelection = computerPlay();

        if (playerSelection == computerSelection) {
            pScore++;
            cScore++;
            return ("Tie! 1 point each");
        }
        else if (playerSelection == "rock")
            if (computerSelection == "scissors") {
                pScore++;
                return ("You win! Rock beats Scissors.") ; 
            }
            else {
                cScore++;
                return ("You lose! Paper beats Rock."); 
            }
        else if (playerSelection == 'paper')
            if (computerSelection == "rock") {
                pScore++;
                return ("You win! Paper beats Rock.");
            }
            else {
                cScore++;
                return ("You lose! Scissors beats Paper.");
            }
        else if (playerSelection == 'scissors')
            if (computerSelection == "paper") {
                pScore++;
                return ("You win! Scissors beats Paper.");
            }
            else {
                cScore++;
                return ("You lose! Rock beats Scissors.");
            }
    }

    // Buttons
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");

//     // 5 round game; scorekeeper
//     function game () {
//         for (i = 0; i < 5; i++) {
//             let result = playRound();
//             console.log(result);
//             console.log("Player Score: " + pScore + " Computer Score: " + cScore)
//         }
// }