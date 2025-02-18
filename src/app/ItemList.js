"use client";
import React, { useState } from "react";

const ItemList = () => {
  // Initialize list with three default items
  const [items, setItems] = useState(["Apple", "Banana", "Avocado"]);
  const [newItem, setNewItem] = useState("");
  // State for filtering items (checkbox: true to show only items starting with "A")
  const [filterA, setFilterA] = useState(false);

  // Add a new item if input is not empty, then clear the input
  const handleAdd = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  // Delete an item by its index
  const handleDelete = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  // Conditionally filter items if checkbox is checked
  const filteredItems = filterA
    ? items.filter((item) => item[0].toUpperCase() === "A")
    : items;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "20px",
      }}
    >
      <h2>Item List</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleAdd} style={buttonStyle}>
          Add Item
        </button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={filterA}
          onChange={(e) => setFilterA(e.target.checked)}
          id="filterA"
        />
        <label htmlFor="filterA" style={{ marginLeft: "5px" }}>
          Show Only Items Starting with "A"
        </label>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "5px",
              borderBottom: "1px solid #ccc",
              padding: "5px",
            }}
          >
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={deleteButtonStyle}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const inputStyle = {
  padding: "8px",
  marginRight: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  padding: "8px 12px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const deleteButtonStyle = {
  padding: "4px 8px",
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "10px",
};

export default ItemList;
