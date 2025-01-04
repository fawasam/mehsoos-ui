import { useState } from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { useCart } from "../../context/CartContext";
import Footer from "../Footer";
import Header from "../Header";
import Section from "../Section";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Cart = () => {
  const { items, total, removeFromCart } = useCart();
  const { token } = useUser();

  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      if (!token) {
        // Store current cart URL in session storage to redirect back after login
        sessionStorage.setItem("redirectAfterLogin", "/cart");
        navigate("/login");
        return;
      }
      // If authenticated, proceed to checkout
      navigate("/checkout");
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Section
          className="pt-[12rem] -mt-[5.25rem]"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="hero"
        >
          <div className="container min-h-screen px-4 mx-auto">
            <div className="max-w-xl mx-auto mt-12 mb-2">
              <div className="bg-[#1B1B1B] rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Your Cart
                </h2>

                {items.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    Your cart is empty
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-4 rounded-xl bg-[#2A2A2A] border border-[#3A3A3A]"
                        >
                          <div className="flex-1">
                            <div className="text-white mb-1">Line Numbers:</div>
                            <div className="text-[#54A9FF] font-medium">
                              {item.numbers.join(", ")}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-white font-bold">
                              AED {item.price}
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 rounded-lg hover:bg-[#3A3A3A] transition-colors text-gray-400 hover:text-red-400"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-[#3A3A3A] pt-4 mb-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-lg text-gray-400">
                          Total Amount
                        </div>
                        <div className="text-2xl font-bold text-white">
                          AED {total}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleCheckout}
                      disabled={items.length === 0}
                      className="w-full py-4 rounded-xl text-lg font-bold transition-all duration-200
                        bg-gradient-to-r from-yellow-200 to-yellow-100 
                        text-gray-900 hover:opacity-90 disabled:opacity-50 
                        disabled:cursor-not-allowed"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Section>
      </div>

      <ButtonGradient />
    </>
  );
};

export default Cart;
