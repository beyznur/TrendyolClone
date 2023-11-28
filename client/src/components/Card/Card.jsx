import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  const { id, attributes } = item;

  return (
    <Link className="link" to={`/product/${id}`}>
      <div className="card">
        <div className="cardItem">
          <div key={id} className="imageItem">
            <img
              src={`${process.env.REACT_APP_UPLOAD_URL}${attributes.img.data.attributes.url}`}
              alt={`Image ${id}`}
              className="productImage"
            />
            <div className="productInfo">
              <p>{attributes.title}</p>
              <span>{`${attributes.price} TL`}</span>
              {attributes.isNew && (
                <img
                  src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
                  className="bestSeller"
                  alt="Best Seller"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
