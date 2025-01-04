import React from "react";
import { Calendar, Ticket, Wallet, ArrowRight } from "lucide-react";

const UserDetail = () => {
  const userData = {
    walletBalance: "1.245 ETH",
    totalTickets: 25,
    upcomingDraws: [
      {
        id: 1,
        date: "Jan 15, 2025",
        prize: "2.5 ETH",
        ticketsOwned: 3,
      },
      {
        id: 2,
        date: "Jan 20, 2025",
        prize: "3.0 ETH",
        ticketsOwned: 5,
      },
    ],
  };

  return (
    <div className="bg-navy-900 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-red-500 text-2xl font-semibold mb-4">JohnDoe</h3>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Your Profile Details
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-2">
            johndoe@gmail.com
          </p>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
            Track your lottery participation, check your wallet balance, and
            monitor upcoming draws
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Stat Cards */}
          {[
            {
              title: "Wallet Balance",
              value: userData.walletBalance,
              subtitle: "Available for tickets",
              icon: <Wallet className="w-4 h-4 text-blue-400" />,
            },
            {
              title: "Total Tickets",
              value: userData.totalTickets,
              subtitle: "Tickets purchased",
              icon: <Ticket className="w-4 h-4 text-blue-400" />,
            },
            {
              title: "Next Draw",
              value: userData.upcomingDraws[0].date,
              subtitle: `Prize pool: ${userData.upcomingDraws[0].prize}`,
              icon: <Calendar className="w-4 h-4 text-blue-400" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url('./src/assets/benefits/card-1.svg')`,
              }}
              className="bg-navy-800 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 cursor-pointer "
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-400">{stat.subtitle}</p>
                </div>
                <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center shadow-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 text-2xl font-bold">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Draws Section */}
        <div className="mb-12">
          <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
            Upcoming Draws
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent rounded-full ml-2"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userData.upcomingDraws.map((draw) => (
              <div
                key={draw.id}
                style={{
                  backgroundImage: `url('./src/assets/benefits/card-1.svg')`,
                }}
                className="bg-navy-800 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {draw.date}
                    </h3>
                    <p className="text-gray-400">
                      Your Tickets: {draw.ticketsOwned}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 text-2xl font-bold">
                    Prize: {draw.prize}
                  </span>
                  <button className="flex items-center gap-2 -mt-[80px] px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl hover:from-blue-500 hover:to-blue-300 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                    Buy More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
