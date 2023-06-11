import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk);

const Payment = () => {
  const { _id, id, amount } = useParams();

  const price = parseFloat(amount);
  return (
    <div>
      This is payment
      <Elements stripe={stripePromise}>
        <CheckOut _id={_id} id={id} price={price}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
