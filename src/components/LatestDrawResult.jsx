import React from "react";
import { ArrowRight } from "lucide-react";

const LatestDrawResult = () => {
  const drawNumbers = [8, 11, 17, 20, 23,];
  const matchResults = [
    { match: "5", winners: 0 },
    { match: "4", winners: 0 },
    { match: "3", winners: 4 },
    { match: "5+0, 4+1", winners: 183 },
    { match: "3+1, 2+1, 1+1, 0+1", winners: "12,135" },
  ];

  const luckyResults = [
    { ticket: "BY4934604", prize: "AED 100,000" },
    { ticket: "AP1493831", prize: "AED 100,000" },
    { ticket: "CP6663669", prize: "AED 100,000" },
  ];

  return (
    <div
      className="w-full max-w-7xl mx-auto backdrop-blur-sm"
      style={{
        borderRadius: "3rem",
        background: "linear-gradient(90deg, #2E8AAB, #6a509a)",
        padding: "1px",
      }}
    >
      <div
        className="w-full h-full p-6 md:p-10 rounded-2xl"
        style={{
          backgroundColor: "#0E0C15",
          borderRadius: "3rem",
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold">LATEST DRAW RESULT</h2>
          <button className="text-gray-400 hover:text-white flex items-center gap-2">
            More <ArrowRight size={20} />
          </button>
        </div>

        <div className="text-gray-400 mb-4">Saturday 22:00, 28/12/2024</div>

        {/* Draw Numbers */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center sm:justify-start">
          {drawNumbers.map((number, index) => (
            <div
              key={index}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#2E8AAB] to-[#1c2e7d] flex items-center justify-center text-xl sm:text-2xl font-bold"
            >
              {number}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {matchResults.map((result, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <span className="text-gray-400">Match</span>{" "}
                  <span className="font-medium">{result.match}</span>
                </div>
                <div>
                  <span className="text-gray-400">Winners</span>{" "}
                  <span className="font-medium">{result.winners}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lucky Chance Results */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">
              LUCKY CHANCE RESULTS
            </h3>
            <div className="space-y-4">
              {luckyResults.map((result, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{result.ticket}</span>
                  <span className="text-gray-400">{result.prize}</span>
                </div>
              ))}
              <div className="text-center text-3xl text-gray-600 pt-2">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestDrawResult;
