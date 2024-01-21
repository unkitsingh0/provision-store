import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Hourglass } from "react-loader-spinner";
function ProductList() {
  const [productLists, setProductLists] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const fetchProductList = async () => {
    // Retrieve data from session storage
    const token = sessionStorage.getItem("token");
    const headers = {
      access_token: `${token}`,
    };
    try {
      let response = await fetch(
        "https://api.kalpav.com/api/v1/product/category/retail",
        {
          method: "GET",
          headers,
        }
      );
      let data = await response.json();
      setProductLists(data.response);
    } catch (error) {
      console.error("Error fetching product list:", error);
      // Handle error state
    }
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) return navigate("/login");
    fetchProductList();
  }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = productLists?.filter((product) =>
    product.productCategory.productCategoryName
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  if (!productLists) {
    return (
      <>
        <Navbar />
        <div className="loader">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-2 mt-2 ">
          <label htmlFor="searchInput" className="form-label mx-1 fs-3">
            Search
          </label>
          <input
            type="text"
            id="searchInput"
            className="form-control mx-1"
            placeholder="Enter product name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          {filteredProducts.map((product) => (
            <Card
              key={product.productCategory.productCategoryId}
              title={product.productCategory.productCategoryName}
              img={product.productCategory.productCategoryImage}
              retail={product.productCategory.retail}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
