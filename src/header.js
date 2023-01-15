import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Picsuit Store</h1>
      <h3>
        <Link to="/cart">
          <i className="ri-shopping-cart-line header-icon"></i>
        </Link>
      </h3>
    </div>
  );
}
