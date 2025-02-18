"use client";
import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import ItemList from "./ItemList";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <Counter />
        <ItemList />
      </main>
      <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "20px" }}>
        <p>&copy; 2024 IDCN Galactic Communication Network. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
