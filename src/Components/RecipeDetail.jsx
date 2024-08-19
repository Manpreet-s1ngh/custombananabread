import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
} from "firebase/firestore";
import { db } from "../database/firebaseconfig";
import { toast } from "react-toastify";
import "../css/RecipeDetail.css";
import Navbar from "./Navbar";

const RecipeDetail = () => {


  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M12.045 2.002C6.513 2.002 2 6.516 2 12.049c0 1.998.525 3.946 1.522 5.658L2 22l4.436-1.512a10.007 10.007 0 0 0 5.609 1.627h.003c5.531 0 10.045-4.515 10.045-10.048 0-5.534-4.514-10.065-10.048-10.065zm.003 18.357a8.307 8.307 0 0 1-4.24-1.168l-.305-.183-3.128 1.067 1.045-3.216-.2-.322a8.263 8.263 0 0 1-1.26-4.407c0-4.564 3.715-8.279 8.283-8.279 4.561 0 8.276 3.716 8.276 8.28-.001 4.563-3.717 8.228-8.271 8.228zm4.548-6.213c-.248-.124-1.469-.726-1.697-.808-.228-.083-.394-.124-.56.124-.167.247-.643.808-.788.975-.145.167-.29.186-.538.062-.248-.124-1.048-.386-2.005-1.23-.74-.659-1.24-1.472-1.386-1.72-.145-.248-.015-.382.109-.505.112-.111.248-.29.372-.435a1.732 1.732 0 0 0 .248-.413c.083-.166.042-.31-.021-.434-.062-.124-.559-1.347-.766-1.844-.202-.482-.409-.416-.559-.423l-.473-.009c-.145 0-.38.054-.58.248-.201.186-.76.744-.76 1.812s.778 2.102.885 2.247c.108.145 1.526 2.348 3.7 3.292.518.223.92.356 1.234.457.518.165.99.142 1.363.086.415-.062 1.27-.518 1.448-1.018.18-.5.18-.93.126-1.018-.057-.087-.202-.145-.42-.248z" />
    </svg>
  );

  const location = useLocation();
  const { recipe } = location.state || {}; // Get the recipe object from state

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkIfRecipeIsSaved = async () => {
      const storedUserInfo = localStorage.getItem("user");
      const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

      if (!userInfo || !recipe) return;

      try {
        const userSavedRecipesRef = doc(db, "userSavedRecipes", userInfo.email);
        const userSavedRecipesDoc = await getDoc(userSavedRecipesRef);

        if (!userSavedRecipesDoc.exists()) {
          // Create userSavedRecipes document if it doesn't exist
          await setDoc(userSavedRecipesRef, { savedRecipes: [] });
        }

        const savedRecipes = userSavedRecipesDoc.data().savedRecipes || [];
        const exists = savedRecipes.some((r) => r.id === recipe.id);
        setIsSaved(exists);
      } catch (error) {
        console.error("Error checking saved recipes:", error);
      }
    };

    if (recipe) {
      checkIfRecipeIsSaved();
    }
  }, [recipe]);

  const handleSaveRecipe = async () => {
    const storedUserInfo = localStorage.getItem("user");
    const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

    if (!userInfo) {
      toast.error("User not logged in. Please log in to continue.");
      return;
    }

    try {
      const userSavedRecipesRef = doc(db, "userSavedRecipes", userInfo.email);

      // Check if userSavedRecipes document exists
      const userSavedRecipesDoc = await getDoc(userSavedRecipesRef);
      if (!userSavedRecipesDoc.exists()) {
        // Create userSavedRecipes document if it doesn't exist
        await setDoc(userSavedRecipesRef, { savedRecipes: [] });
      }

      if (isSaved) {
        // Remove the recipe from saved recipes
        await updateDoc(userSavedRecipesRef, {
          savedRecipes: arrayRemove({
            id: recipe.id,
            title: recipe.title,
            price: recipe.price,
            description: recipe.description,
            imageUrl: recipe.imageUrl,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
          }),
        });
        toast.success("Recipe removed from saved recipes!");
      } else {
        // Add the recipe to saved recipes
        await updateDoc(userSavedRecipesRef, {
          savedRecipes: arrayUnion({
            id: recipe.id,
            title: recipe.title,
            price: recipe.price,
            description: recipe.description,
            imageUrl: recipe.imageUrl,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
          }),
        });
        toast.success("Recipe saved successfully!");
      }
      setIsSaved(!isSaved); // Toggle the saved state
    } catch (error) {
      console.log("Error saving/removing recipe:", error);
      toast.error("Error saving/removing recipe. Please try again.");
    }
  };
const handleShareOnWhatsApp = () => {
  const ingredientsList = recipe.ingredients
    .map((ingredient, index) => `${index + 1}. ${ingredient}`)
    .join("\n");

  const message = `Check out this recipe!\n\n*${recipe.title}*\n\n*Price*: ${recipe.price}\n\n*Description*: ${recipe.description}\n\n*Ingredients*:\n${ingredientsList}\n\n*Instructions*:\n${recipe.instructions}\n\n*Image*:\n${recipe.imageUrl}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};



  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="recipe-detail-container">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="recipe-image"
        />

        <div className="recipe-info">
          <h1 className="recipe-title">{recipe.title}</h1>
          <p className="recipe-price">{recipe.price}</p>
          <p className="recipe-description">{recipe.description}</p>
          <h3 className="recipe-ingredients">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="recipe-ingredient">
                {ingredient}
              </li>
            ))}
          </ul>
          <h3 className="recipe-instructions">Instructions:</h3>
          <pre className="recipe-instructions">{recipe.instructions}</pre>
          <button className="save-recipe-button" onClick={handleSaveRecipe}>
            {isSaved ? "Remove from Saved Recipes" : "Save Recipe"}
          </button>
          <button
            className="share-recipe-button"
            onClick={handleShareOnWhatsApp}
          >
            <WhatsAppIcon /> Share on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
