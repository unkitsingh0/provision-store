import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
function Login() {
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const formInputData = (e) => {
    const { name, value } = e.target;
    setloginFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const onFormSubmite = async (e) => {
    //Preventing default behavior . Stoping page from reload
    e.preventDefault();

    //Checking if user has entered email and password

    if (!loginFormData.email) return toast.error("Please enter Email");
    if (!loginFormData.password) return toast.error("Please enter Password");

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmailCheck = emailRegex.test(loginFormData.email);
    setIsValidEmail(isValidEmailCheck);
    if (!isValidEmailCheck) return toast.error("Invalid Email");

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
    const isValidPasswordCheck = passwordRegex.test(loginFormData.password);
    setIsValidPassword(isValidPasswordCheck);

    if (!isValidPasswordCheck) return toast.error("Invalid password");

    let hashedPassword = CryptoJS.SHA256(loginFormData.password).toString(
      CryptoJS.enc.Hex
    );
    // Prepare the payload in loginFormData format
    const formData = new FormData();
    formData.append("username", loginFormData.email);
    formData.append("password", hashedPassword);
    formData.append("grant_type", "password");

    const headers = {
      Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
    };
    try {
      const loginApiUrl = "https://apiv2stg.promilo.com/user/oauth/token";
      const response = await fetch(loginApiUrl, {
        method: "POST",

        body: formData,
        headers,
      });
      if (response.ok) {
        const data = await response.json();

        sessionStorage.setItem("token", data.response.access_token);
        sessionStorage.setItem("isLoggedIn", "true");

        navigate("/");
        // Handle the response data (e.g., store tokens, update state, etc.)
        // console.log("Login successful:", data);
      } else {
        // Handle error response
        console.error("Login failed:", response.status, response.statusText);
        return toast.error("Login failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during login:", error.message);
      return toast.error("Login failed");
    }
  };
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) return navigate("/");
  }, [navigate]);
  return (
    <div className="Login container min-vh-100 d-flex align-items-center justify-content-center flex-column ">
      <img
        src={logo}
        alt="logo"
        width={100}
        className="position-absolute top-0 start-0"
      />
      <h3>Login</h3>
      <form
        className="border rounded p-4 w-60 h-50 bg-light"
        onSubmit={onFormSubmite}
      >
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${isValidEmail ? "" : "border-danger"}`}
            name="email"
            onChange={formInputData}
            value={loginFormData.email}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        {/* password */}
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          name="password"
          onChange={formInputData}
          value={loginFormData.password}
          className={`form-control ${isValidPassword ? "" : "border-danger"}`}
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8 characters long, contain letters,capital
          letter,small letter,special char and numbers, and must not contain
          spaces, or emoji.
        </div>
        <div className="btnLogin mt-3 d-flex justify-content-center">
          <button className="btn btn-primary w-50 ">Login</button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default Login;
