import React from "react";
import "./idCard.css";
const idCard = ({ firstName, lastName, dateOfBirth, city, image }) => {
  return (
    <div className="card">
      {image}
      <div className="container">
        <h4>
          <b>
            {firstName} {lastName}
          </b>
        </h4>
        <p>
          Born in {city} on the {dateOfBirth}
        </p>
      </div>
    </div>
  );
};

export default idCard;
