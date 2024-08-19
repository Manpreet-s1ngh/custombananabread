import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../database/firebaseconfig";
import { toast } from "react-toastify";
import "../css/PaymentPage.css";
import Navbar from "./Navbar";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalAmount = location.state?.totalAmount || 0;

  // Retrieve user credentials from local storage
  const storedUserInfo = localStorage.getItem("user");
  const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardType: "Visa", // Default value
  });
  const [savedCardDetails, setSavedCardDetails] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState("");

  useEffect(() => {
    const fetchSavedCardDetails = async () => {
      if (userInfo) {
        try {
          const userPaymentRef = doc(db, "userPaymentMethods", userInfo.uid);
          const docSnap = await getDoc(userPaymentRef);
          if (docSnap.exists()) {
            setSavedCardDetails(docSnap.data().cards || []);
          } else {
            // Create the collection with an empty array if it doesn't exist
            await setDoc(userPaymentRef, { cards: [] });
            setSavedCardDetails([]);
          }
        } catch (error) {
          console.error("Error fetching saved card details:", error);
        }
      }
    };

    fetchSavedCardDetails();
  }, []);

  const handleInputChange = (e) => {


    console.log("I am heer");
    
    if( e.value === ""){
      window.alert("manpreet");
      
    }
    else{
  setCardDetails({
    ...cardDetails,
    [e.target.name]: e.target.value,
  });
    }
  
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!userInfo) {
      toast.error("User not logged in. Please log in to continue.");
      return;
    }

    try {
      // Save order details in Firestore
      const orderId = Date.now().toString();
      await setDoc(doc(db, "orders", orderId), {
        userId: userInfo.uid,
        email: userInfo.email,
        amount: totalAmount,
        paymentStatus: "Paid",
        timestamp: new Date(),
        cardNumber: cardDetails.cardNumber, // Save card number
        cardType: cardDetails.cardType, // Save the selected card type
      });

      // Save card details if checkbox is checked
      if (document.getElementById("saveCard").checked) {
        const userPaymentRef = doc(db, "userPaymentMethods", userInfo.uid);
        await updateDoc(userPaymentRef, {
          cards: savedCardDetails.length
            ? [...savedCardDetails, cardDetails]
            : [cardDetails],
        });
        toast.success("Card details saved successfully!");
      }

      toast.success("Payment successful! Your order has been placed.");
      navigate("/Homepage");
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    }
  };

  const handleCardSelection = (card) => {
  
    if( card != null ){
      console.log("Hello");
      setCardDetails(card);
      setSelectedCardId(card.cardNumber); // Set selected card ID
    }
    else{

        setSelectedCardId("");
      setCardDetails({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardType: "Visa", // Default value
      });
    }
    
 
    
  };

  const handleDeleteCard = async () => {
    if (!userInfo) {
      toast.error("User not logged in. Please log in to continue.");
      return;
    }

    try {
      const updatedCards = savedCardDetails.filter(
        (card) => card.cardNumber !== selectedCardId
      );
      await setDoc(doc(db, "userPaymentMethods", userInfo.uid), {
        cards: updatedCards,
      });
      setSavedCardDetails(updatedCards);
      setCardDetails({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardType: "Visa",
      });
      setSelectedCardId(""); // Clear selected card ID
      toast.success("Card details deleted successfully.");
    } catch (error) {
      toast.error("Error deleting card details. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="payment-page">
        <h1>Payment Details</h1>
        <form onSubmit={handlePaymentSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="totalAmount">Amount:</label>
            <input
              type="text"
              id="totalAmount"
              value={`$${totalAmount.toFixed(2)}`}
              disabled
            />
          </div>

          {savedCardDetails.length > 0 && (
            <div className="form-group savedCards">
              <label htmlFor="savedCards">Select Saved Card:</label>
              <select
                id="savedCards"
                value={selectedCardId}
                onChange={(e) =>
                  handleCardSelection(
                    savedCardDetails.find(
                      (card) => card.cardNumber === e.target.value
                    )
                  )
                }
              >
                <option value="">Select a card 22</option>
                {savedCardDetails.map((card) => (
                  <option key={card.cardNumber} value={card.cardNumber}>
                    {card.cardNumber} - {card.cardType}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedCardId && (
            <button
              type="button"
              className="delete-card-button"
              onClick={handleDeleteCard}
            >
              Delete Saved Card Details
            </button>
          )}

          <div className="form-group cardType">
            <label htmlFor="cardType">Card Type:</label>
            <select
              id="cardType"
              name="cardType"
              value={cardDetails.cardType}
              onChange={handleInputChange}
              required
            >
              <option value="Visa">Visa</option>
              <option value="Debit">Debit</option>
              <option value="MasterCard">MasterCard</option>
              <option value="American Express">American Express</option>
              <option value="Discover">Discover</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group autoFill">
            <input
              type="checkbox"
              id="saveCard"
              defaultChecked={savedCardDetails.length > 0}
            />
            <label htmlFor="saveCard">Save card details for future use</label>
          </div>
          <div className="form-group">
            <label htmlFor="pickupOption">Pickup Option:</label>
            <p>Delivery option will be available soon.</p>
            <input type="text" id="pickupOption" value="Pickup Only" disabled />
          </div>
          <button type="submit" className="submit-button">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
