import React from "react";

const Card = ({ title, author, link, date }) => {
  const newDate = new Date(date).toLocaleString();

  return (
    <div className="card w-full bg-base-100 shadow-material-shadow lg:w-1/2">
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <span className="text-xs">{newDate}</span>
        <span className="text-sm">Author: {author}</span>
        <div className="card-actions justify-end">
          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn btn-primary shadow-material-shadow">
              Read more...
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
