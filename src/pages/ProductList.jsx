// Import necessary modules and components
import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Hourglass } from "react-loader-spinner";
import { Toaster, toast } from "react-hot-toast";
// Define the ProductList page
function ProductList() {
  // State to manage product list data
  const [productLists, setProductLists] = useState(undefined);
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for search query
  const navigate = useNavigate();

  // Function to fetch product list data from the API
  const fetchProductList = async () => {
    // Retrieve data from session storage
    const token = sessionStorage.getItem("token");

    // Set headers with the access token
    const headers = {
      access_token: `${token}`,
    };
    try {
      // Fetch product list data
      let response = await fetch(
        "https://api.kalpav.com/api/v1/product/category/retail",
        {
          method: "GET",
          headers,
        }
      );
      // Parse response data
      let data = await response.json();

      // Set product list state
      setProductLists(data.response);
    } catch (error) {
      // Handle error fetching product list
      console.error("Error fetching product list:", error);

      //Toast to display error message
      toast.error("Something went wrong...!!!");
    }
  };

  // Check if the user is logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) return navigate("/login");

    // Fetch product list on component mount
    fetchProductList();
  }, [navigate]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = productLists?.filter((product) =>
    product.productCategory.productCategoryName
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Loader component while waiting for product list data
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

  // Render the ProductList component
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-2 mt-2 ">
          {/* Search input */}
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

        {/* Display filtered product cards */}
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
        <Toaster />
      </div>
    </>
  );
}

export default ProductList;
