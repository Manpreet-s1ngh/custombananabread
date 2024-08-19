import React, { useState } from "react";
import CategoryComponent from "./CategoryComponent";
import SummaryComponent from "./SummaryComponent";
import { categories } from "./data";

import "../css/customize.css";


const ParentComponent = () => {
  const [categoryData, setCategoryData] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle category changes
  const handleCategoryChange = (categoryName, option, price, isRadio) => {
    if (isRadio) {
      setCategoryData((prevData) => ({
        ...prevData,
        [categoryName]: { option, price },
      }));
    } else {
      const updatedOptions = option
        ? [...selectedOptions, { categoryName, option, price }]
        : selectedOptions.filter(
            (item) =>
              item.option !== option || item.categoryName !== categoryName
          );
      setSelectedOptions(updatedOptions);
    }
  };

  return (
    <div className="app">
      <h1>Customize Your Banana Bread</h1>
      <div className="categories">
        {categories.map((category) => (
          <CategoryComponent
            key={category.type}
            categoryName={category.type}
            onChange={handleCategoryChange}
          />
        ))}
      </div>
      <SummaryComponent
        categoryData={categoryData}
        selectedOptions={selectedOptions}
      />
    </div>

    /** */
  );
};

export default ParentComponent;
