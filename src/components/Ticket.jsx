import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import NumberLineSelector from "./design/NumberLineSelector";

const Ticket = ({ className = "" }) => {
  return (
    <div
      className={`pb-6 bg-gradient-to-b from-yellow-200 via-cyan-200 to-blue-400 rounded-xl ${className}`}
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="lg:flex gap-12 items-start md:p-6">
          {/* Left Section */}
          <div className="lg:w-1/2 lg:border-r lg:border-blue-400/20 lg:pr-8">
            {/* Logo section */}
            <div className="mb-12 flex justify-center lg:justify-start">
              <img className="w-40 md:w-48 h-auto" />
            </div>

            {/* Jackpot section */}
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-600 drop-shadow-lg">
                TOP PRIZE
              </h2>
              <div className="inline-flex flex-col space-y-2">
                <span className="text-3xl font-bold text-blue-600">AED</span>
                <span className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-blue-600 drop-shadow-lg">
                  20 MILLION
                </span>
              </div>
            </div>

            {/* Lucky Chance Draw section */}
            <div className="bg-blue-500 p-6 sm:p-8 rounded-2xl mb-8 text-center transform hover:scale-105 transition-transform duration-300 border border-blue-400/30 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                TRIPLE 100 RAFFLE
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                AED 300,000
              </p>
              <p className="text-lg text-white mt-2">
                *AED 100,000 GUARANTEED FOR 3 WINNERS
              </p>
            </div>

            {/* Entry price */}
            <div className="text-center mb-8">
              <p className="text-xl sm:text-2xl text-blue-600 font-bold">
                Check Our Prizes
              </p>
            </div>

            {/* Play button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-600 font-bold py-4 px-8 rounded-full text-xl sm:text-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              BUY NOW
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  Buy A Ticket Quickly
                </h3>
              </div>

              <div className="space-y-4">
                <NumberLineSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
