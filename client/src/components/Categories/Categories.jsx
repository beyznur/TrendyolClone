import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");

  return (
    <div className="categories">
      {data?.map((item, index) => (
        <div className="row" key={index}>
          <div className="col">
            <Link className="link" to={`/products/${index + 1}`}>
              <div className="col-item">
                <img
                  src={`${process.env.REACT_APP_UPLOAD_URL}${item.attributes?.img?.data?.attributes?.url}`}
                  alt={`Image ${index}`}
                />
                <span>{item.attributes.title}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
