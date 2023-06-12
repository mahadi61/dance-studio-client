import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import "./CheckOut.css";

const CheckOut = ({ _id, id, price }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [tnxId, setTnxId] = useState("");

  useEffect(() => {
    if (price > 0) {
      fetch(
        "https://dance-studio-server-seven.vercel.app/payment-intent-for-class",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: price }),
        }
      )
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //   console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }
    setLoading(true);

    const { paymentIntent, error: err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );

    if (err) {
      setError(err?.message);
    }

    // console.log("paymentIntent", paymentIntent);
    setLoading(false);

    if (paymentIntent.status === "succeeded") {
      setTnxId(paymentIntent.id);
      // save payment information to the server
      const paymentInfo = {
        name: user?.displayName,
        email: user?.email,
        paymentStatus: "paid",
        classId: id,
        enrollClassId: _id,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
      };

      fetch("https://dance-studio-server-seven.vercel.app/class-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (
            data.insertPayment.acknowledged &&
            data.deleteClass.acknowledged
          ) {
            Swal.fire("Payment Successful!", "", "success");
          }
        });
    }

    // end of handle payment submit
  };

  return (
    <>
      <form className="w-3/4 mx-auto " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-full flex items-center justify-center">
          <button
            className="btn btn-primary bg-blue-600 btn-sm mt-3 w-28"
            type="submit"
            disabled={!stripe || !clientSecret || loading}
          >
            <span className={loading ? `loading loading-spinner` : ""}>
              Pay
            </span>
          </button>
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {tnxId && (
        <p className="text-green-500">
          Transaction Successful. Your transactionId:{" "}
          <span className="text-black font-bold">{tnxId}</span>
        </p>
      )}
    </>
  );
};

export default CheckOut;
