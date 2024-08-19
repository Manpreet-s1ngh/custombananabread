import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../Assets/logo.JPG";
import bag from "../Assets/bag.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user information from local storage
   const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser) {
      
      // Assume user object has a name property
      console.log(storedUser);
      
      setUserName(storedUser.given_name );

    }
  }, []);

  const handleName=()=>{
    // Retrieve user information from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      // Assume user object has a name property
      console.log(storedUser);

      setUserName(storedUser.given_name);
    }
  }
  return (
    <div className="navbar">
      <div className="logoSection">
        <img src={logo} className="logo" alt="Logo"  onClick={ handleName }/>
        <h1>Banana Bread Bunch !</h1>
        <img
          src={bag}
          className="bag"
          onClick={() => {
            navigate("/OrderHistory");
          }}
          alt="Bag"
        />
      </div>
      <div>
        <ul className="list">
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/Homepage");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/recipies");
              }}
            >
              Product
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/savedRecipes");
              }}
            >
              Saved Recipes
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                navigate("/signup");
              }}
            >
              {" "}
              User
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
