import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import NumberLineSelector from "./design/NumberLineSelector";

const Ticket = ({ className = "" }) => {
  return (
    <div
      className={`pb-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 via-gray-900 to-purple-950 rounded-xl ${className}`}
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="lg:flex gap-12 items-start md:p-6">
          {/* Left Section */}
          <div className="lg:w-1/2 lg:border-r lg:border-purple-500/20 lg:pr-8">
            {/* Logo section */}
            <div className="mb-12 flex justify-center lg:justify-start">
              <img className="w-40 md:w-48 h-auto" />
            </div>

            {/* Jackpot section */}
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                JACKPOT
              </h2>
              <div className="inline-flex flex-col space-y-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  USD
                </span>
                <span className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-400 inline-block text-transparent bg-clip-text drop-shadow-lg">
                  100,000,000
                </span>
              </div>
            </div>

            {/* Lucky Chance Draw section */}
            <div className="bg-gradient-to-r from-blue-800/40 via-purple-800/40 to-fuchsia-800/40 p-6 sm:p-8 rounded-2xl mb-8 text-center transform hover:scale-105 transition-transform duration-300 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-4">
                Guaranteed Lucky Chance Draw
              </h3>
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent">
                USD 100,000 * 7 Winners
              </p>
            </div>

            {/* Entry price */}
            <div className="text-center mb-8">
              <p className="text-xl sm:text-2xl bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent font-bold">
                1 Entry for USD 50
              </p>
            </div>

            {/* Play button */}
            <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 hover:from-blue-600 hover:via-purple-600 hover:to-fuchsia-600 text-white font-bold py-4 px-8 rounded-full text-xl sm:text-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] transform hover:-translate-y-1 transition-all duration-200">
              PLAY NOW
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
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
