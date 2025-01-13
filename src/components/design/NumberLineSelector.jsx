import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Zap } from "lucide-react";

const NumberLineSelector = () => {
  const { addToCart } = useCart();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [numbers] = useState(Array.from({ length: 49 }, (_, i) => i + 1));

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number].sort((a, b) => a - b));
    }
  };

  const handleQuickPick = () => {
    const quickPick = [];
    const availableNumbers = [...numbers];
    while (quickPick.length < 5) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      quickPick.push(availableNumbers[randomIndex]);
      availableNumbers.splice(randomIndex, 1);
    }
    setSelectedNumbers(quickPick.sort((a, b) => a - b));
  };

  const handleClear = () => {
    setSelectedNumbers([]);
  };

  const handleAddToCart = async () => {
    if (selectedNumbers.length === 5) {
      setIsAdding(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        addToCart(selectedNumbers);
        setSelectedNumbers([]);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        setIsAdding(false);
      }
    }
  };

  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <div className="bg-white rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-blue-600 md:text-xl font-bold py-3 px-6 rounded-full inline-block">
            Select Your Numbers
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleQuickPick}
              className="px-2 sm:px-3 py-1.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 text-xs font-bold flex items-center gap-1 sm:gap-2"
            >
              <Zap size={14} className="hidden sm:block" />
              Quick Pick
            </button>
            <button
              onClick={handleClear}
              className="px-2 sm:px-3 py-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 text-xs font-bold flex items-center gap-1 sm:gap-2"
            >
              <span className="text-xs sm:text-sm">✕</span>
              Clear
            </button>
          </div>
        </div>

        {/* Selected Numbers Display */}
        <div className="flex justify-center gap-3 mb-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold 
                border-2 transition-all duration-200
                ${
                  selectedNumbers[index]
                    ? "bg-blue-500 text-white border-blue-500 scale-105"
                    : "border-gray-300"
                }
              `}
            >
              {selectedNumbers[index] || ""}
            </div>
          ))}
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number)}
              className={`
                w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg font-medium
                border transition-all duration-200 hover:scale-105 active:scale-95
                ${
                  selectedNumbers.includes(number)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-500"
                }
              `}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Numbers Counter */}
        <div className="flex justify-end items-center">
          <div className="text-sm font-medium text-gray-500">
            {selectedNumbers.length}/5 numbers selected
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={selectedNumbers.length !== 5 || isAdding}
        className={`mt-6 w-full py-4 rounded-xl text-lg font-bold
          transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
          ${
            selectedNumbers.length === 5 && !isAdding
              ? "bg-yellow-400 hover:bg-yellow-500 text-blue-600 font-bold shadow-lg transform hover:-translate-y-1"
              : "bg-gray-100 text-gray-400 font-bold cursor-not-allowed"
          }
        `}
      >
        {isAdding ? "Adding to Cart..." : "Add to Cart"}
      </button>

      {/* Success Message */}
      {showSuccess && (
        <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
          Numbers successfully added to cart!
        </div>
      )}
    </div>
  );
};

export default NumberLineSelector;
