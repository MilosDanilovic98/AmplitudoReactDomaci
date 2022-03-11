import React from "react";
const book = ({ title, year, author, quote, image }) => {
  return (
    <div className="card">
      {image}
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>
          Writen in {year} by {author}
        </p>
        <hr />
        <p>Quote:{quote}</p>
      </div>
    </div>
  );
};

export default book;
