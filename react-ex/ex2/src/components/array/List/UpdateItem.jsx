import { useState } from "react";
export default function UpdateItem() {
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [editIdx, setEditIdx] = useState(null);
  const [editValue, setEditValue] = useState("");
  return (
    <div>
      <h3>Update Item</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {editIdx === idx ? (
              <>
                <input value={editValue} onChange={e => setEditValue(e.target.value)} />
                <button onClick={() => {
                  const newItems = [...items];
                  newItems[idx] = editValue;
                  setItems(newItems);
                  setEditIdx(null);
                }}>Save</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => {
                  setEditIdx(idx);
                  setEditValue(item);
                }}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}