import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [ordering, setOrdering] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/bobziroll/scrimba-react-bootcamp-images/contents/images.json`
    )
      .then((res) => res.json())
      .then((d) => JSON.parse(atob(d.content)))
      .then((data) => setPhotos(data));
  }, []);

  function addToCart(photo) {
    cartItems.indexOf(photo) === -1 &&
      setCartItems((prevCartItems) => [...prevCartItems, photo]);
  }

  function removeFromCart(photoId) {
    const itemToRemove = cartItems.find((item) => item.id === photoId);
    const newCartItems = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(newCartItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setOrdering(true);
    setTimeout(() => {
      setCartItems([]);
      console.log("Order placed");
      setOrdering(false);
      //alert("Order placed");
    }, 3000);
  }

  return (
    <div>
      <Context.Provider
        value={{
          photos: photos,
          cartItems,
          addToCart,
          removeFromCart,
          handleSubmit,
          ordering,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}
export { Context, ContextProvider };
