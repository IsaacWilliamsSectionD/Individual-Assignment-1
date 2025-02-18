"use client";
import React, { useState } from "react";

const Counter = () => {
  // Initialize count state to 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", margin: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={buttonStyle}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)} style={buttonStyle}>
        Decrease
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 15px",
  margin: "5px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Counter;
