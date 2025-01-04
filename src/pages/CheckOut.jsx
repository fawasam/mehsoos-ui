import { useState } from "react";
import { useCart } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import ButtonGradient from "../assets/svg/ButtonGradient";

import { Loader2 } from "lucide-react";
import Section from "../components/Section";

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe(
  "sk_test_51JYaAdSEOklscpJEpAb6WIXmldUBW6ZFeaE51M3YY1ydcg79xoglfU8CVVctPrcaks010FMdo8wIKcUS0kjgGNi900lmEiiovb"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { items, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create payment intent on your server
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          total,
        }),
      });

      const { clientSecret } = await response.json();

      const { error: paymentError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
            },
          },
        });

      if (paymentError) {
        setError(paymentError.message);
      } else if (paymentIntent.status === "succeeded") {
        clearCart();
        // Redirect to success page
        window.location.href = "/success";
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="bg-[#2A2A2A] p-6 rounded-xl border border-[#3A3A3A]">
        <h3 className="text-xl font-bold text-white mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 bg-[#1B1B1B] border border-[#3A3A3A] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-[#1B1B1B] border border-[#3A3A3A] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-[#2A2A2A] p-6 rounded-xl border border-[#3A3A3A]">
        <h3 className="text-xl font-bold text-white mb-4">Payment Details</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Card Information
            </label>
            <div className="w-full px-4 py-3 bg-[#1B1B1B] border border-[#3A3A3A] rounded-lg">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#FFFFFF",
                      "::placeholder": {
                        color: "#6B7280",
                      },
                    },
                    invalid: {
                      color: "#EF4444",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-[#2A2A2A] p-6 rounded-xl border border-[#3A3A3A]">
        <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-300">
              <span>Line Numbers: {item.numbers.join(", ")}</span>
              <span>AED {item.price}</span>
            </div>
          ))}
          <div className="border-t border-[#3A3A3A] pt-4 mt-4">
            <div className="flex justify-between text-xl font-bold text-white">
              <span>Total</span>
              <span>AED {total}</span>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full py-4 rounded-xl text-lg font-bold transition-all duration-200
          bg-gradient-to-r from-yellow-200 to-yellow-100 
          text-gray-900 hover:opacity-90 disabled:opacity-50 
          disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Processing...
          </>
        ) : (
          `Pay AED ${total}`
        )}
      </button>
    </form>
  );
};

const Checkout = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Section
          className="pt-[6rem] -mt-[5.25rem]"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="hero"
        >
          <div className="container min-h-screen px-4 mx-auto">
            <div className="max-w-2xl mx-auto mt-12 mb-2">
              <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </Section>
      </div>
      <ButtonGradient />
    </>
  );
};

export default Checkout;
