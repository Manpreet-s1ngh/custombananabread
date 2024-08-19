// src/components/OrderHistory.js
import React, { useEffect, useState } from "react";
import { db } from "../database/firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../css/OrderHistory.css"; // Import the CSS
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userDoc = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      if (userDoc) {
        const q = query(
          collection(db, "orders"),
          where("email", "==", userDoc.email)
        );
        const querySnapshot = await getDocs(q);
        const userOrders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(userOrders);
      }
    };

    fetchOrders();
  }, [  ]);

  if (!userDoc) {
    return <p>Please log in to view your order history.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="order-history">
        <h2>Your Order History</h2>
        {orders.length > 0 ? (
          <ul className="order-list">
            {orders.map((order) => (
              <li key={order.id} className="order-item">
                <h3>Order ID: {order.id}</h3>
                <p>
                  <strong>Amount Paid:</strong> ${order.amount.toFixed(2)}
                </p>
                <p>
                  <strong>Payment Method:</strong> {order.cardType}
                  <p>
                    <strong>Card No.:</strong> {order.cardNumber}
                  </p>
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(
                    order.timestamp?.seconds * 1000
                  ).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
