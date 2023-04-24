function rpsls(playerChoice) {
  const elements = ["rock", "paper", "scissors", "lizard", "spock"];

  function randomElement() {
    return elements[Math.floor(Math.random() * elements.length)];
  }

  if (!playerChoice){
    playerChoice = randomElement();
    return { player: playerChoice}
  }

  playerChoice = playerChoice.toLowerCase();

  if (!elements.includes(playerChoice)) {
    throw new Error("Invalid choice: " + playerChoice);
  }

  const opponentChoice = randomElement();

  if (playerChoice === opponentChoice) {
    return { player: playerChoice, opponent: opponentChoice, result: "tie" };
  }

  if (
    (playerChoice === "rock" && (opponentChoice === "scissors" || opponentChoice === "lizard")) ||
    (playerChoice === "paper" && (opponentChoice === "rock" || opponentChoice === "spock")) ||
    (playerChoice === "scissors" && (opponentChoice === "paper" || opponentChoice === "lizard")) ||
    (playerChoice === "lizard" && (opponentChoice === "paper" || opponentChoice === "spock")) ||
    (playerChoice === "spock" && (opponentChoice === "rock" || opponentChoice === "scissors"))
  ) {
    return { player: playerChoice, opponent: opponentChoice, result: "win" };
  }

  return { player: playerChoice, opponent: opponentChoice, result: "lose" };
}

function rps(playerChoice) {
  const elements = ["rock", "paper", "scissors"];

  function randomElement() {
    return elements[Math.floor(Math.random() * elements.length)];
  }

  if (!playerChoice){
    playerChoice = randomElement();
    return { player: playerChoice}
  }

  playerChoice = playerChoice.toLowerCase();

  if (!elements.includes(playerChoice)) {
    throw new Error("Invalid choice: " + playerChoice);
  }

  const opponentChoice = randomElement();

  if (playerChoice === opponentChoice) {
    return { player: playerChoice, opponent: opponentChoice, result: "tie" };
  }

  if (
    playerChoice === "rock" && opponentChoice === "scissors" ||
    playerChoice === "paper" && opponentChoice === "rock" ||
    playerChoice === "scissors" && opponentChoice === "paper"
  ) {
    return { player: playerChoice, opponent: opponentChoice, result: "win" };
  }

  return { player: playerChoice, opponent: opponentChoice, result: "lose" };
}

module.exports = { rps, rpsls };

