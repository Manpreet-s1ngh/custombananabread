import React, { useEffect } from "react";
import { useSelectedOptions } from "./SelectedOptionsContext";
import { categories } from "./data";


const CategoryComponent = ({ categoryName }) => {
  const { selectedOptions, updateRadioOption, updateCheckboxOption } =
    useSelectedOptions();
  const category = categories.find((cat) => cat.type === categoryName);

  useEffect(() => {
    if (
      category &&
      (categoryName === "Base Type" ||
        categoryName === "Size Options" ||
        categoryName === "Shape Options")
    ) {
      const defaultOption = category.options[0];
      if (defaultOption) {
        const [defaultValue, defaultPrice] = defaultOption;
        if (!selectedOptions.radio[categoryName]) {
          updateRadioOption(categoryName, defaultValue, defaultPrice);
        }
      }
    }
  }, [category, categoryName, updateRadioOption, selectedOptions.radio]);

  const handleRadioChange = (option, price) => {
    console.log(`Radio option changed to: ${option} ($${price.toFixed(2)})`);
    updateRadioOption(categoryName, option, price);
  };

  const handleCheckboxChange = (option, price, isChecked) => {
    console.log(
      `${
        isChecked ? "Selected" : "Unselected"
      } checkbox option: ${option} ($${price.toFixed(2)})`
    );
    updateCheckboxOption(categoryName, option, price, isChecked);
  };

  if (!category) {
    return <div>Category "{categoryName}" not found.</div>;
  }

  return (
    <div
      className={`category ${categoryName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <h2>{categoryName}</h2>
      <ul>
        {category.options.map(([option, price], index) =>
          categoryName === "Base Type" ||
          categoryName === "Size Options" ||
          categoryName === "Shape Options" ? (
            <RadioOption
              key={index}
              option={option}
              price={price}
              name={`category-${categoryName}`} // Ensure radio buttons in the same group have the same name
              isChecked={selectedOptions.radio[categoryName]?.option === option}
              onChange={() => handleRadioChange(option, price)}
            />
          ) : (
            <CheckboxOption
              key={index}
              option={option}
              price={price}
              isChecked={selectedOptions.checkboxes.some(
                (item) =>
                  item.option === option && item.category === categoryName
              )}
              onChange={(e) =>
                handleCheckboxChange(option, price, e.target.checked)
              }
            />
          )
        )}
      </ul>
    </div>
  );
};

const RadioOption = ({ option, price, name, isChecked, onChange }) => (
  <li className="option">
    <label>
      <input type="radio" name={name} checked={isChecked} onChange={onChange} />
      {option}
      <span className="price">${price.toFixed(2)}</span>
    </label>
  </li>
);

const CheckboxOption = ({ option, price, isChecked, onChange }) => (
  <li className="option">
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {option}
      <span className="price">${price.toFixed(2)}</span>
    </label>
  </li>
);

export default CategoryComponent;