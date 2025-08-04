import { useState } from "react";
export default function ReverseItem() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  return (
    <div>
      <h3>Reverse Item</h3>
      <button onClick={() => setItems([...items].reverse())}>Reverse</button>
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}