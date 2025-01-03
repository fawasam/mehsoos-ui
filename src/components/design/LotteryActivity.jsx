import React, { useState } from "react";

const LotteryActivity = () => {
  const [activeTab, setActiveTab] = useState("purchased");

  const activities = [
    {
      id: 1,
      user: "Tom Bass",
      avatar: "/api/placeholder/32/32",
      numbers: [24, 25, 26, 27, 28],
      tickets: "01",
    },
    {
      id: 2,
      user: "Tom Bass",
      avatar: "/api/placeholder/32/32",
      numbers: [24, 25, 26, 27, 28],
      tickets: "01",
    },
    {
      id: 3,
      user: "Tom Bass",
      avatar: "/api/placeholder/32/32",
      numbers: [24, 25, 26, 27, 28],
      tickets: "01",
    },
  ];

  const myTickets = [
    {
      id: 1,
      user: "Current User",
      avatar: "/api/placeholder/32/32",
      numbers: [14, 15, 16, 17, 18],
      tickets: "02",
    },
  ];

  const history = [
    {
      id: 1,
      user: "Past Winner",
      avatar: "/api/placeholder/32/32",
      numbers: [1, 2, 3, 4, 5],
      tickets: "03",
      date: "2024-12-31",
    },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "purchased":
        return activities;
      case "myTickets":
        return myTickets;
      case "history":
        return history;
      default:
        return activities;
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-red-500 text-lg font-semibold mb-2">
            DAILY LOTTERY
          </h3>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            LATEST ACTIVITIES
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            The world's first truly fair and global lottery. Each player has the
            highest chances to win the JACKPOT
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "purchased"
                ? "bg-red-500 text-white"
                : "bg-navy-800 text-white hover:bg-navy-700"
            }`}
            onClick={() => setActiveTab("purchased")}
          >
            PURCHASED TICKETS
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "myTickets"
                ? "bg-red-500 text-white"
                : "bg-navy-800 text-white hover:bg-navy-700"
            }`}
            onClick={() => setActiveTab("myTickets")}
          >
            MY TICKETS
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "history"
                ? "bg-red-500 text-white"
                : "bg-navy-800 text-white hover:bg-navy-700"
            }`}
            onClick={() => setActiveTab("history")}
          >
            HISTORY
          </button>
        </div>

        {/* Activity Table */}
        <div className="bg-navy-800 rounded-lg p-4">
          <div className="grid grid-cols-12 gap-4 text-gray-400 text-sm mb-4 px-4">
            <div className="col-span-3 md:col-span-4">USER</div>
            <div className="col-span-7 md:col-span-6">TICKET NUMBERS</div>
            <div className="col-span-2">TICKETS</div>
          </div>

          {/* Dynamic Content Based on Active Tab */}
          {getTabContent().map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 items-center bg-navy-700 rounded-lg p-4 mb-2 hover:bg-navy-600 transition-colors"
            >
              {/* User Column */}
              <div className="col-span-3 md:col-span-4 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.user}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white font-semibold hidden md:block">
                  {item.user}
                </span>
              </div>

              {/* Numbers Column */}
              <div className="col-span-7 md:col-span-6 flex flex-wrap gap-2">
                {item.numbers.map((number, index) => (
                  <span
                    key={index}
                    className="bg-navy-800 text-red-500 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  >
                    {number}
                  </span>
                ))}
              </div>

              {/* Tickets Column */}
              <div className="col-span-2 text-yellow-500 font-semibold text-center">
                {item.tickets}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {getTabContent().length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No tickets found in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LotteryActivity;
