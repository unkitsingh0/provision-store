// Import React and the Navbar component
import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./style/about.css";

// Define the About component
function About() {
  // Render the About component

  return (
    <>
      {/* Include the Navbar component */}
      <Navbar />

      {/* Main content of the About page */}
      <div>
        {/* Title and description */}
        <h2 className="ms-5 me-3 mt-4">Welcome to Provision Store</h2>
        <p className="ms-5 me-3">
          Provision Store is an E-shop website which is a virtual provision
          marketplace where You can buy various types of provision products.
        </p>

        {/* About section with folder structure and how to start project */}
        <div className="about " style={{ height: "100vh", width: "100vw" }}>
          {/*Provision-Store Folder Structure*/}

          <div
            className="folderStructure bg-black text-light mt-2"
            style={{ height: "81%", width: "40%" }}
          >
            <h5 className="title">Provision-Store Folder Structure</h5>
            {/* src folder */}
            <h5 className="folder">├── src</h5>
            {/* components folder */}
            <h5 className="folder">│ ├── components</h5>
            {/* login folder */}
            <h5 className="folder">│ ├── login</h5>
            <h5 className="file">│ │ └── Login.jsx</h5>
            {/* navbar folder */}
            <h5 className="folder">│ ├── navbar </h5>
            <h5 className="file">│ │ └── Navbar.jsx</h5>
            {/* images folder */}
            <h5 className="folder">│ ├── images</h5>
            <h5 className="file">│ │ └── logo.png</h5>
            <h5>│ └── ...</h5>
            {/* pages folder */}
            <h5 className="folder">│ ├── pages</h5>
            <h5 className="folder">│ ├── style</h5>
            <h5 className="file">│ │ └── about.css</h5>
            <h5 className="file">│ ├── About.jsx</h5>
            <h5 className="file">│ ├── Login.jsx</h5>
            <h5 className="file">│ ├── ProductList.jsx</h5>
            <h5>│ └── ...</h5>
            {/* Root files folder */}
            <h5 className="file">│ ├── App.css</h5>
            <h5 className="file">│ ├── App.js</h5>
            <h5 className="file">│ ├── index.js</h5>
            <h5>│ └── ...</h5>
            <h5 className="folder">├── public</h5>
            <h5>│ └── ...</h5>
            <h5>└── ... </h5>
          </div>

          {/* How to start project */}
          <div
            className="folderStructure bg-black text-light mt-2"
            style={{ height: "41%", width: "40%" }}
          >
            <h5 className="title">how to start the project</h5>
            <h5>
              1.<span className="highlightColor">git </span>clone
              https://github.com/unkitsingh0/provision-store
            </h5>
            <h5>
              2.<span className="highlightColor">cd</span> provision-store
            </h5>
            <h5>
              3.<span className="highlightColor">npm</span> install
            </h5>
            <h5>
              4.<span className="highlightColor">npm</span> start
            </h5>
            <h5>
              5.This command will start the development server, and you can view
              your React app in your browser at http://localhost:3000.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
