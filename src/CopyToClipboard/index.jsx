import { useState } from "react";
import "../CopyToClipboard/style.css";
function CopyClipboard() {
  const [text, setText] = useState("");
  const [copy, setCopy] = useState(false);
  const [error, setError] = useState(null);

  function handleCopy(value) {
    setError("");
    if (!value.trim()) {
      setError("Type some values to copy");
      return;
    }

    navigator.clipboard.writeText(value);
    setCopy(true);

    setTimeout(() => setCopy(false), 2000);
  }

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              value={text}
              placeholder="Type Something"
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              handleCopy(text);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
        </div>
      </div>

      {copy && (
        <p className="message" data-testid="copied-message">
          Copied!
        </p>
      )}
      {error && (
        <p className="errorMessage" data-testid="error-message">
          {error}
        </p>
      )}
    </div>
  );
}

export default CopyClipboard;
