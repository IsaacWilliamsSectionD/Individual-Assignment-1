"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#370553", padding: "20px", textAlign: "center", color: "white" }}>
      <h1>IDCN - Advanced Front-End Foundations</h1>
      <nav style={{ marginTop: "10px" }}>
        <Link href="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link href="/counter" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Counter</Link>
        <Link href="/itemlist" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Item List</Link>
      </nav>
    </header>
  );
};

export default Header;
