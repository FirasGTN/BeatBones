import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const public_key =
  "pk_test_51OK1fyBP8kjItCOqRcmglIRt926HfpH48QdPFbNwyCfaLQI8LmX1vDieOT6imb7PvndxybTSYI3Bx7haaUDoFNAW00rotUecpQ";

const stripeTestPomise = loadStripe(public_key);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPomise}>
      <PaymentForm />
    </Elements>
  );
}
