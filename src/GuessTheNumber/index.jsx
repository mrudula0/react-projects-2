import React, { useState } from "react";

function GuessTheNumber() {
  const generateRandom = () => Math.floor(Math.random() * 100 + 1);
  const [guess, setGuess] = useState("");
  const [numToGuess, setNumToGuess] = useState(generateRandom);
  const [attempts, setAttempts] = useState(0);
  const [msg, setMsg] = useState("");

  // Function to handle guess checking
  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMsg("Please enter a number between 1 and 100");
      return;
    }
    setAttempts(attempts + 1);
    if (num === numToGuess) {
      setMsg(
        `Congratulations! You guessed the number in ${attempts + 1} attempts`
      );
    } else if (num < numToGuess) {
      setMsg("Too low! Try again");
    } else {
      setMsg("Too High! Try again");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setNumToGuess(generateRandom());
    setGuess("");
    setMsg("");
    setAttempts(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          gap: "30px",
        }}
      >
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset game</button>
      </div>
      <p>{msg}</p>
    </div>
  );
}

export default GuessTheNumber;
