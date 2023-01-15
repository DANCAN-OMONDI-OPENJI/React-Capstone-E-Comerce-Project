import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Photos from "./photos";
import CartItems from "./cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </div>
  );
}

export default App;
