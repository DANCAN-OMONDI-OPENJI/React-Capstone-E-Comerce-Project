import React, { useContext } from "react";
import { Context } from "./context";
import Header from "./header";
import Image from "./image";
import customCSS from "./customCSS";

export default function Photos() {
  const { photos } = useContext(Context);
  return (
    <div>
      <Header />
      <div className="photo">
        {photos.map((image, index) => (
          <div key={image.id}>
            <Image photo={image} myClass={customCSS(index)} />
          </div>
        ))}
        <p>my vibe</p>
      </div>
    </div>
  );
}
