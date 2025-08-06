import { useState } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default function ListGroup() {
  const [items, setItems] = useState([
    { text: "Apple", color: "#000" },
    { text: "Banana", color: "#000" },
    { text: "Cherry", color: "#000" }
  ]);
  const [input, setInput] = useState("");
  const [editIdx, setEditIdx] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add item
  const handleAdd = () => {
    if (input.trim()) {
      setItems([...items, { text: input, color: "#000" }]);
      setInput("");
    }
  };

  // Update item
  const handleUpdate = (idx) => {
    const newItems = [...items];
    newItems[idx].text = editValue;
    setItems(newItems);
    setEditIdx(null);
    setEditValue("");
  };

  // Random color for item
  const handleRandomColor = (idx) => {
    const newItems = [...items];
    newItems[idx].color = getRandomColor();
    setItems(newItems);
  };

  // Reverse list
  const handleReverse = () => {
    setItems([...items].reverse());
  };

  return (
    <div>
      <h3>List Group</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReverse} style={{ marginLeft: 8 }}>Reverse All</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ margin: "8px 0", display: "flex", alignItems: "center" }}>
            {editIdx === idx ? (
              <>
                <input
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  style={{ marginRight: 8 }}
                />
                <button onClick={() => handleUpdate(idx)}>Save</button>
                <button onClick={() => setEditIdx(null)} style={{ marginLeft: 4 }}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ color: item.color, fontWeight: "bold", minWidth: 80 }}>{item.text}</span>
                <button onClick={() => handleRandomColor(idx)} style={{ marginLeft: 8 }}>Random</button>
                <button onClick={() => setEditIdx(idx) || setEditValue(item.text)} style={{ marginLeft: 4 }}>Update</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}