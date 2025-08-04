import { useState } from "react";

function Counter() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
      }}
      style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px,${position.y}px)`,
          width: "10px",
          height: "10px",
          top: "-10px",
          left: "-10px",
        }} />
    </div>
  );
}

export default Counter;
