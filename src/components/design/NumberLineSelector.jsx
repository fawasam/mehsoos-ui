import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const NumberLineSelector = () => {
  const { addToCart, total } = useCart();

  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const [numbers, setNumbers] = useState(
    Array.from({ length: 49 }, (_, i) => i + 1)
  );

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleShuffle = () => {
    setSelectedNumbers([]);
    const shuffledNumbers = [...numbers];
    for (let i = shuffledNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNumbers[i], shuffledNumbers[j]] = [
        shuffledNumbers[j],
        shuffledNumbers[i],
      ];
    }
    setNumbers(shuffledNumbers);
  };

  const handleQuickPick = () => {
    const quickPick = [];
    const availableNumbers = [...numbers];
    while (quickPick.length < 5) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      quickPick.push(availableNumbers[randomIndex]);
      availableNumbers.splice(randomIndex, 1);
    }
    setSelectedNumbers(quickPick);
  };

  const handleClear = () => {
    setSelectedNumbers([]);
  };

  const handleAddToCart = async () => {
    if (selectedNumbers.length === 5) {
      setIsAdding(true);
      try {
        // Simulate API call if needed
        await new Promise((resolve) => setTimeout(resolve, 500));
        addToCart(selectedNumbers);
        setSelectedNumbers([]); // Clear selection after adding to cart
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        setIsAdding(false);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        {/* Header */}
        <div className="bg-[#54A9FF] text-white text-xl font-bold py-3 px-6 rounded-full inline-block mb-6">
          Line 1
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-7 gap-3 mb-6">
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number)}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium
                border-2 transition-all duration-200
                ${
                  selectedNumbers.includes(number)
                    ? "bg-[#54A9FF] text-white border-[#54A9FF]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#54A9FF]"
                }
              `}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleShuffle}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            🔄
          </button>
          <button
            onClick={handleClear}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Selected Numbers Count */}
        <div className="mt-4 text-sm text-gray-600">
          Selected: {selectedNumbers.length}/5
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={selectedNumbers.length !== 5}
        className={`
          mt-4 w-full py-4 rounded-xl text-lg font-bold transition-all duration-200
          ${
            selectedNumbers.length === 5
              ? "bg-gradient-to-r from-yellow-200 to-yellow-100 text-gray-800 hover:opacity-90"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }
        `}
      >
        {isAdding ? "ADDING..." : "ADD TO CART"}
      </button>
    </div>
  );
};

export default NumberLineSelector;
