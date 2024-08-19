import React from 'react'
import CategoryComponent from './CategoryComponent';
import { SelectedOptionsProvider } from "./SelectedOptionsContext";
import '../css/customize.css'
import { useNavigate } from "react-router-dom";
import image from '../Assets/backimage.jpg'
import Navbar from './Navbar';

export default function Customize() {
  const navigate = useNavigate(); // Hook for navigation
  const handleGoToSummary = () => {
    navigate("/summary");
  };

  return (
    // <SelectedOptionsProvider>
    <div>
      <Navbar />
      <div className="app">
        <h1>Customize Your Banana Bread</h1>
        <div className="categories">
          <CategoryComponent categoryName="Base Type" />
          <CategoryComponent categoryName="Nuts" />
          <CategoryComponent categoryName="Chocolate" />
          <CategoryComponent categoryName="Fruits" />
          <CategoryComponent categoryName="Seeds" />
          <CategoryComponent categoryName="Sweeteners" />
          <CategoryComponent categoryName="Spices" />
          <CategoryComponent categoryName="Texture Add-Ins" />
          <CategoryComponent categoryName="Toppings" />
          <CategoryComponent categoryName="Dietary Adjustments" />
          <CategoryComponent categoryName="Size Options" />
          <CategoryComponent categoryName="Shape Options" />
        </div>

        <button onClick={handleGoToSummary} className="paybutton">
          {" "}
          Confirm
        </button>
      </div>
    </div>
  );
}
