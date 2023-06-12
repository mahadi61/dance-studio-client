import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk);

const Payment = () => {
  const { _id, id, amount } = useParams();

  const price = parseFloat(amount);
  return (
    <div className="flex flex-col justify-center items-center h-full gap-12 bg-slate-100">
      <div>
        <h1 className="text-3xl text-center">Pay Now</h1>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOut _id={_id} id={id} price={price}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
