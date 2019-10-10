// Computer Choices
    let answers = ["rock",
"paper",
"scissors"];

//Scoreboard
    let cScore = 0;
    let pScore = 0;
    let winner = document.createElement('p');
    let playScreen = document.querySelector('#play');

    function updateScore() {
        document.getElementById("cScore").innerHTML = cScore;
        document.getElementById("pScore").innerHTML = pScore;
        declareWinner();
    }

    // Computer randomized choice
    function computerPlay () {
        return (answers[Math.floor(Math.random() * answers.length)]);
    }

    // One round of the game comparing choices between computer and player
    function playRound (playerSelection, computerSelection) {

        // var playerSelection = "";
        var computerSelection = computerPlay();

        if (playerSelection == computerSelection) {
            pScore++;
            cScore++;
            document.getElementById("play").innerHTML = "Tie! 1 point each";
            updateScore();
        }
        else if (playerSelection == "rock")
            if (computerSelection == "scissors") {
                pScore++;
                document.getElementById("play").innerHTML = "You win! Rock beats Scissors."; 
                updateScore();
            }
            else {
                cScore++;
                document.getElementById("play").innerHTML = "You lose! Paper beats Rock."; 
                updateScore();
            }
        else if (playerSelection == 'paper')
            if (computerSelection == "rock") {
                pScore++;
                document.getElementById("play").innerHTML = "You win! Paper beats Rock.";
                updateScore();
            }
            else {
                cScore++;
                document.getElementById("play").innerHTML = "You lose! Scissors beats Paper.";
                updateScore();
            }
        else if (playerSelection == 'scissors')
            if (computerSelection == "paper") {
                pScore++;
                document.getElementById("play").innerHTML = "You win! Scissors beats Paper.";
                updateScore();
            }
            else {
                cScore++;
                document.getElementById("play").innerHTML = "You lose! Rock beats Scissors.";
                updateScore();

            }
    }

    // Best 3 of 5

    function declareWinner () {

        if (pScore == 3 && cScore == 3) {
            winner.textContent = "A tie!? Mulligan";
            playScreen.appendChild(winner);
            pScore = 0;
            cScore = 0;
        }
        else if (pScore == 3 && cScore < 3) {
            winner.textContent = "You won the match! Think you can win again?"
            playScreen.appendChild(winner);
            pScore = 0;
            cScore = 0;
        }
        else if (cScore == 3 && pScore < 3) {
            winner.textContent = "You have lost the match. You got the next one!"
            playScreen.appendChild(winner);
            pScore = 0;
            cScore = 0;
        }
    }

    // Buttons
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");

    rock.addEventListener("click", function(){playRound("rock")})
    paper.addEventListener("click", function(){playRound("paper")})
    scissors.addEventListener("click", function(){playRound("scissors")})

    

    // document.getElementById("rock").addEventListener("click", playRound("rock"))
    // document.getElementById("paper").addEventListener("click", playRound("paper"))
    // document.getElementById("scissors").addEventListener("click", playRound("scissors"))

//     // 5 round game; scorekeeper
//     function game () {
//         for (i = 0; i < 5; i++) {
//             let result = playRound();
//             console.log(result);
//             console.log("Player Score: " + pScore + " Computer Score: " + cScore)
//         }
// }