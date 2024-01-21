// Import necessary modules and components
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import About from "./pages/About";
import "./App.css";

// Define the main App component
function App() {
  return (
    // Root element with the "App" class
    <div className="App">
      {/* Set up BrowserRouter for handling navigation */}
      <BrowserRouter>
        {/* Define route configurations using the Routes component */}
        <Routes>
          {/* Route for the home page, rendering the ProductList component */}
          <Route path="/" element={<ProductList />} />
          {/* Route for the login page, rendering the Login component */}
          <Route path="/login" element={<Login />} />
          {/* Route for the about page, rendering the About component */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
