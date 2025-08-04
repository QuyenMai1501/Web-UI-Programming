import { useState } from "react";

const availableToppings = [
  "Cheese",
  "Pepperoni",
  "Olives",
  "Mushroom",
  "Bacon",
];

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });
  const [selectedTopping, setSelectedTopping] = useState(availableToppings[0]);

  const handleAddTopping = () => {
    if (!pizza.topping.includes(selectedTopping)) {
      setPizza((prevPizza) => ({
        ...prevPizza,
        topping: [...prevPizza.topping, selectedTopping],
      }));
    }
  };

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Toppings: {pizza.topping.join(", ")}</p>
      <select
        value={selectedTopping}
        onChange={(e) => setSelectedTopping(e.target.value)}>
        {availableToppings.map((topping) => (
          <option key={topping} value={topping}>
            {topping}
          </option>
        ))}
      </select>
      <button onClick={handleAddTopping}>Add Topping</button>
    </div>
  );
};

export default Pizza;
