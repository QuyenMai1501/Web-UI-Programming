import { useState } from "react";
function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}
export default function RandomColorWords() {
  const [words] = useState(["React", "JavaScript", "HTML", "CSS"]);
  const [colors, setColors] = useState(words.map(() => "#000"));
  return (
    <div>
      <h3>Random Color Words</h3>
      <button onClick={() => setColors(words.map(() => getRandomColor()))}>Random Color</button>
      <ul>
        {words.map((word, idx) => (
          <li key={idx} style={{ color: colors[idx], fontWeight: "bold" }}>{word}</li>
        ))}
      </ul>
    </div>
  );
}