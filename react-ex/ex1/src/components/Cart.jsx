import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "T-shirt", quantity: 1 },
      { id: 2, title: "Jeans", quantity: 1 },
    ],
  });

  const handleClick = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
            <button onClick={() => handleClick(item.id)}>+</button>
          </li>
        ))}
      </ul>
      <p>Discount: {cart.discount * 100}%</p>
    </div>
  );
};

export default Cart;
