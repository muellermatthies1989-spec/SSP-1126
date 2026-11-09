const moves = ["rock", "paper", "scissors"];
const player = process.argv[2];

if (!moves.includes(player)) {
  console.log("Please choose rock, paper or scissors.");
  process.exit();
}

const computer = moves[Math.floor(Math.random() * 3)];
let result = "";

if (player === computer) {
  result = "It's a draw!";
} else if (
  (player === "rock" && computer === "scissors") ||
  (player === "paper" && computer === "rock") ||
  (player === "scissors" && computer === "paper")
) {
  result = "You win!";
} else {
  result = "You lose!";
}

console.log(`You chose ${player}. Computer chose ${computer}. ${result}`);