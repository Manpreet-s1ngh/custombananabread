import React from "react";

const SummaryComponent = ({ categoryData, selectedOptions }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <h3>Category Data</h3>
      <pre>{JSON.stringify(categoryData, null, 2)}</pre>
      <h3>Selected Options</h3>
      <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
    </div>
  );
};

export default SummaryComponent;
