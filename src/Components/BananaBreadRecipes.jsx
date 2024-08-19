import React, { useState } from "react";
import recipes from "./recipes"; // Adjust the path if necessary
import "../css/BananaBreadRecipes.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const BananaBreadRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter recipes based on search term
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRecipes(filtered);

    // Generate suggestions
    const newSuggestions = recipes
      .filter((recipe) =>
        recipe.title.toLowerCase().startsWith(value.toLowerCase())
      )
      .map((recipe) => recipe.title);
    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(suggestion.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
    <Navbar/>
      <div>
        <h1 className="product"> Popualar Recipies..</h1>
        <div className="search-bar-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search recipes..."
            className="search-bar"
          />
          {suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="recipes-container">
          <br />
          <div className="cards-container">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="card">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="card-image"
                />
                <div className="card-content">
                  <p className="card-price">{recipe.price}</p>
                  <h2 className="card-title">{recipe.title}</h2>
                  <p className="card-description">{recipe.description}</p>
                  <p className="card-ingredients">
                    Ingredients: {recipe.ingredients.length}
                  </p>
                  <button
                    className="view-recipe-button"
                    onClick={() => {
                      navigate("/details", { state: { recipe } });
                    }}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BananaBreadRecipes;
