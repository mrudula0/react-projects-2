import React, { useState } from "react";
import "../GeneratePassword/style.css";
function PasswordValidation() {
  const [length, setLength] = useState(4);
  const [lowCase, setLowCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const handleLengthChange = (e) => {
    setError("");
    let newLength = parseInt(e.target.value);
    if (NaN(newLength) || newLength <= 0) {
      setError("Length cannot be Empty or 0");
      setLength("");
      setPassword("");
      return;
    }
    if (newLength > 20) {
      setError("Max length is 20");
      newLength = 20;
    }
    setLength(newLength);
  };
  const handleGenerate = () => {
    setError("");
    if (!length || length === 0) {
      setError("Length cannot be empty or 0");
      setPassword("");
      return;
    }
    let chars = "";
    if (lowCase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (upperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "1234567890";
    if (symbols) chars += "!@#$%^&*()_+";

    if (chars.length === 0) {
      setError("Select at least one option");
      setPassword("");
      return;
    }
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[random];
    }

    setPassword(generatedPassword);
  };
  return (
    <div className="passwordGenerator">
      <h1>Generate password</h1>
      <p>Create a secure and Strong Password, to keep your account Safe</p>
      <div className="passwordGenerator-container">
        <label htmlFor="passwordLength">
          PasswordLength
          <input
            type="number"
            id="passwordlength"
            value={length}
            min="1"
            max="20"
            onChange={handleLengthChange}
          />
        </label>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              data-testid="lowercase-checkbox"
              checked={lowCase}
              onChange={() => setLowCase(!lowCase)}
            />
            Include LowerCase
          </label>
          <label>
            <input
              type="checkbox"
              data-testid="uppercase-checkbox"
              checked={upperCase}
              onChange={() => setUpperCase(!upperCase)}
            />
            Include UpperCase
          </label>

          <label>
            <input
              type="checkbox"
              data-testid="number-checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              data-testid="symbols-checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
            Include Symbols
          </label>
        </div>
        <button
          className="generate-btn"
          data-testid="generate-button"
          onClick={handleGenerate}
        >
          Generate
        </button>
        <div className="result">
          {password && <input type="text" value={password} />}
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default PasswordValidation;
