
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function playGame(player) {
    var Turns = 0;
    var Correct = 0;
    var Answer = getRandomInt(1,100);

    do {
        var Guess = prompt("Guess the integer between 1 and 100!");
        //add one to turns
		Turns++;
        if (isNaN(Guess) !== true) {
            if (Guess == Answer) {
                alert("CORRECT! You guessed it in "+Turns+" turns.");
                Correct = 1;
				TotalGames++;
				alert("You've played " +TotalGames+ " games!");
				TotalTurns = Turns + TotalTurns;
				var Average = TotalTurns / TotalGames;
				alert("Your average turns are " +Average+ "!")
            }
            else if (Guess > Answer) {
                alert("Hint: Try a lower number!");
            }
            else {
                alert("Hint: Try a higher number!");
            }
        }
        else {
            alert("Quitter!");
            player.losses ++;
        }
    }
    while (Correct == 0);
}

function start() {
	
    var playAgain = 'y';
    do {
        playGame();
        playAgain = prompt("Would you like to play again? (y or n)");
    }
    while(playAgain == 'y');
}
function init() {


}
alert("Steel your mind for this, the ultimate game of skill!");
init();
var Average = 0;
var TotalTurns = 0;
var TotalGames = 0;	
start();