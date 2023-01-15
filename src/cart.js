import React, { useContext } from "react";
import useCustomHoverHook from "./customHoverHook";
import { Link } from "react-router-dom";
import { Context } from "./context";

export default function CartItems() {
  const [hover, myRef] = useCustomHoverHook();
  const { cartItems, removeFromCart, handleSubmit, ordering } =
    useContext(Context);
  const total = (cartItems.length * 12).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div>
      <div className="cart-img-div">
        <h1 className="cart-heading">cart items</h1>
        <h3 className="link-home">
          <Link to="/">
            <i className="ri-home-4-line"></i> Home
          </Link>
        </h3>
      </div>
      <div className="cart-img-div">
        <p></p>
        <h3>price</h3>
      </div>
      <div ref={myRef}>
        {cartItems.map((item) => (
          <section key={item.id} className="cart-img-div">
            <div className="delete-bin">
              {
                <h3>
                  <i
                    className={
                      hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"
                    }
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                  ></i>
                </h3>
              }
              <img src={item.url} alt="cute-view" className="cart-img" />
            </div>
            <p>$12</p>
          </section>
        ))}
      </div>
      <div className="cart-img-div">
        <p></p>
        <h3>Total: {total} </h3>
      </div>
      <button className="cart-btn" onClick={handleSubmit}>
        {ordering ? "Ordering" : "Place Order"}
      </button>
      {cartItems.length === 0 && (
        <div>
          <p style={{ textAlign: "center" }}>
            Thank you for visiting our shop. Add new items to your cart and
            place order! @FaithNdungenDancanOpenji
          </p>
        </div>
      )}
    </div>
  );
}
// onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
