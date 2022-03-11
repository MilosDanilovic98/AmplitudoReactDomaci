import React from "react";
import "./image.css";
const imageComponent = ({ src }) => {
  return (
    <div>
      <img className="image" src={`/../../images/${src}`} alt="Bla" />
    </div>
  );
};

export default imageComponent;
