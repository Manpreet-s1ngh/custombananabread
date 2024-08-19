import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../database/firebaseconfig";
import "../css/SavedRecipes.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const SavedRecipes = () => {

    const navigate = useNavigate();

  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      const storedUserInfo = localStorage.getItem("user");
      const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

      if (!userInfo) {
        // Handle user not logged in scenario
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "userSavedRecipes", userInfo.email); // Ensure correct reference to user document
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setSavedRecipes(userData.savedRecipes || []);
        } else {
          setSavedRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching saved recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <Navbar/>
      <div className="saved-recipes-container">
        <h1>Saved Recipes</h1>
        {savedRecipes.length === 0 ? (
          <p>No saved recipes found.</p>
        ) : (
          <div className="saved-recipes-list">
            {savedRecipes.map((recipe) => (
              <div key={recipe.id} className="saved-recipe-card">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="saved-recipe-image"
                />
                <div className="saved-recipe-info">
                  <h2 className="card-title">{recipe.title}</h2>
                  <p className="card-price">{recipe.price}</p>
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
        )}
      </div>
    </div>
  );
};

export default SavedRecipes;
