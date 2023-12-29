import React, { useState } from "react";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../styles/PaymentForm.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:5000/api/store/paiment",
          {
            amount: 1000,
            id,
          }
        );
        if (response.data.success) {
          console.log("successful payment");
          setSuccess(true);
        } else if (!response.data.success) {
          console.log("invalid payment");
          setSuccess(false);
        }
      } catch (error) {
        console.log("Error Check Your Data");
      }
    } else {
      console.log("Error Check Your Data");
    }
  };

  return (
    <div className="pay-form">
      {!success ? (
        <form onSubmit={handSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>PAY</button>
        </form>
      ) : (
        <div>
          <h2>you just bought a sweet</h2>
        </div>
      )}
    </div>
  );
}
