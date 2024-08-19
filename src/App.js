import logo from "./logo.svg";
import "./App.css";

import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import ItemSection from "./Components/ItemSection";
import Footer from "./Components/Footer";
import CategoryComponent from "./Components/CategoryComponent";
import Customize from "./Components/Customize";
import ParentComponent from "./Components/ParentComponent";
import SummaryDisplay from "./Components/SummaryDisplay";
import { SelectedOptionsProvider } from "./Components/SelectedOptionsContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// import SignUp from "./Components/SignUp";
import "./App.css";

// import React, { useEffect } from "react";
// import Login from "./Components/login";
// import SignUp from "./Components/register";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Profile from "./Components/profile";
import { useState } from "react";
// import { auth } from "./Components/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toasts

import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import ForgotPassword from "./Components/ForgotPassword";
import SignOutButton from "./Components/SignOutButton";
import PaymentPage from "./Components/PaymentPage";
import OrderHistory from "./Components/OrderHistory";
import BananaBreadRecipes from "./Components/BananaBreadRecipes";
import RecipeDetail from "./Components/RecipeDetail";
import SavedRecipes from "./Components/SavedRecipes";

function App() {
  //  const [user, setUser] = useState();
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // });

  return (
    <div>
      <Router>
        // <ToastContainer />
        <SelectedOptionsProvider>
          <Routes>
            <Route path="/custombananabread" element={<SignIn />} />
            <Route path="/custombananabread/" element={<SignIn />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/Homepage" element={<Body />} />
            <Route path="/homepage" element={<Body />} />
            <Route path="/summary" element={<SummaryDisplay />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signout" element={<SignOutButton />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/paymentpage" element={<PaymentPage />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
            <Route path="/recipies" element={<BananaBreadRecipes />} />
            <Route path="/details" element={<RecipeDetail />} />
            <Route path="/savedRecipes" element={<SavedRecipes />} />
          </Routes>
        </SelectedOptionsProvider>
        <ItemSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
