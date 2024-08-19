import React, { createContext, useState, useContext } from "react";

// Create a context with default empty value
const SelectedOptionsContext = createContext();

export const useSelectedOptions = () => useContext(SelectedOptionsContext);

export const SelectedOptionsProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    radio: {},
    checkboxes: [],
  });

  const updateRadioOption = (category, option, price) => {
    setSelectedOptions((prev) => {
      const updatedOptions = {
        ...prev,
        radio: { ...prev.radio, [category]: { option, price } },
      };
      console.log("Updated Radio Options:", updatedOptions.radio);
      return updatedOptions;
    });
  };

  const updateCheckboxOption = (category, option, price, isChecked) => {
    setSelectedOptions((prev) => {
      const updatedOptions = {
        ...prev,
        checkboxes: isChecked
          ? [...prev.checkboxes, { category, option, price }]
          : prev.checkboxes.filter(
              (item) => !(item.option === option && item.category === category)
            ),
      };
      console.log("Updated Checkbox Options:", updatedOptions.checkboxes);
      return updatedOptions;
    });
  };

  return (
    <SelectedOptionsContext.Provider
      value={{ selectedOptions, updateRadioOption, updateCheckboxOption }}
    >
      {children}
    </SelectedOptionsContext.Provider>
  );
};
