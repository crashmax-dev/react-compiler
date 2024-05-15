import { useState } from "react";

export function Input() {
  const [input, setInput] = useState("");

  return (
    <label>
      Text:
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </label>
  );
}
