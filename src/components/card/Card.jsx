import React from "react";
import { Link } from "react-router-dom";

function Card({ title, img, retail }) {
  return (
    <div
      className="card m-3 bg-light shadow-sm p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: "18rem", display: "flex", flexDirection: "column" }}
    >
      <img src={img} className="card-img-top p-1" alt="..." height={200} />
      <div
        className="card-body"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <h5 className="card-title" style={{ marginBottom: "auto" }}>
          {title}
        </h5>
        <Link
          className="btn btn-primary align-self-start mt-1"
          style={{ width: "100%" }}
        >
          {retail ? "Retail" : "WholeSale"}
        </Link>
      </div>
    </div>
  );
}

export default Card;
