import React from "react";
const movie = ({ title, year, director, genre, actors, image }) => {
  return (
    <div className="card">
      {image}
      <div className="container">
        <h4>
          <b>{title} </b>
        </h4>
        <p>
          Directed by {director} in {year}
        </p>
        <hr />
        <p>Actors:{actors}</p>
        <hr />
        Genre:{genre}
      </div>
    </div>
  );
};

export default movie;
