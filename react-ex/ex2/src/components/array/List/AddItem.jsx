import { useState } from "react";

export default function AddItem() {
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [input, setInput] = useState("");
  return (
    <div>
      <h3>Add Item</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          if (input.trim()) {
            setItems([...items, input]);
            setInput("");
          }
        }}>
        Add
      </button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
