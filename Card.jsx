import React from "react";

const Card = ({ key, title, description, imgurl, url }) => {
  return (
    <>
      <div key={key} className="card">
        <img
          src={imgurl}
          class="card-img-top"
          style={{ height: "60%", width: "100%" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 30)}</h5>
          <p className="card-text">
            {description ? (
              description.slice(0, 70)
            ) : (
              <p>
                Lorem ipsum dolores voluptatibus placeat ex nihil repellat vitae
                ipsam rerum eligendi, optio
              </p>
            )}{" "}
            ...
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
