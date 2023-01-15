import React, { useContext } from "react";
import { Context } from "./context";
import useCustomHoverHook from "./customHoverHook";
import PropTypes from "prop-types";
//import Heart3LineIcon from "remixicon-react/Heart3LineIcon";
function Image({ photo, myClass }) {
  const { addToCart } = useContext(Context);
  const [hover, myRef] = useCustomHoverHook();

  const handleClick = () => {
    //console.log("clicked");
    photo.isFavorite = !photo.isFavorite;
  };
  return (
    <div ref={myRef}>
      {photo.isFavorite ? (
        <i
          className="ri-heart-3-fill fill-color heart"
          onClick={handleClick}
        ></i>
      ) : (
        hover && <i className="ri-heart-3-line heart" onClick={handleClick}></i>
      )}
      <div className="icon-div">
        <div></div>
        <div>
          {hover && (
            <i
              className="ri-shopping-cart-2-line div-cart-icon"
              onClick={() => addToCart(photo)}
            ></i>
          )}
        </div>
      </div>
      <img className={`img ${myClass}`} src={photo.url} alt="cart-product" />
    </div>
  );
}
Image.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
  }),
  myClass: PropTypes.string.isRequired,
};
export default Image;
