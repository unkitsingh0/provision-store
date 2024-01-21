// Import necessary modules and components
import React from "react";
import { Link } from "react-router-dom";

// Define the Card Component
function Card({ title, img, retail }) {
  // Render the Card component
  return (
    <div
      className="card m-3 bg-light shadow-sm p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: "18rem", display: "flex", flexDirection: "column" }}
    >
      {/* Image */}
      <img src={img} className="card-img-top p-1" alt="..." height={200} />
      {/* Card body */}
      <div
        className="card-body"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Title */}
        <h5 className="card-title" style={{ marginBottom: "auto" }}>
          {title}
        </h5>
        {/* Link/button for Retail or Wholesale */}
        {/* Display "Retail" or "WholeSale" based on the 'retail' prop */}
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
