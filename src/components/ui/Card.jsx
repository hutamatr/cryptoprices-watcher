import React from "react";

const Card = ({ title, desc, img, link }) => {
  return (
    <div class="card image-full max-w-sm bg-base-100 shadow-md">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
        <div class="card-actions justify-end">
          <a href={link} target="_blank" rel="noreferrer">
            <button class="btn btn-primary">Read More...</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
