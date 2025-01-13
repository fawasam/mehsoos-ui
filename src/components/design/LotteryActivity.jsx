import api from "../../services/api.interceptor";
import React, { useState, useEffect } from "react";

const LotteryActivity = () => {
  const [query, setQuery] = useState({ status: "active" });
  const [ticketDetails, setTicketDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("active");

  useEffect(() => {
    fetchTicketDetails();
  }, [query]);

  const fetchTicketDetails = async () => {
    try {
      const response = await api.post("/user-tickets", { query });
      setTicketDetails(response?.data?.result || []);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setQuery({ status: tab });
  };

  const TabButton = ({ value, label }) => (
    <button
      className={`px-4 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap ${
        activeTab === value
          ? "bg-red-500 text-white"
          : "bg-navy-800 text-white hover:bg-navy-700"
      }`}
      onClick={() => handleTabChange(value)}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-navy-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-red-500 text-lg font-semibold mb-2">
            {activeTab.toUpperCase()}
          </h3>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            LATEST ACTIVITIES
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            The worlds first truly fair and global lottery. Each player has the
            highest chances to win the JACKPOT
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          <TabButton value="active" label="ACTIVE" />
          <TabButton value="expired" label="EXPIRED" />
          <TabButton value="history" label="HISTORY" />
        </div>

        {/* Activity Table */}
        <div className="bg-navy-800 rounded-lg p-2 md:p-4">
          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 text-gray-400 text-sm mb-4 px-4">
            <div>TICKET ID</div>
            <div>TICKET NUMBERS</div>
            <div className="text-center">DRAW ID</div>
          </div>

          {/* Tickets List */}
          {ticketDetails && ticketDetails.length > 0 ? (
            <div className="space-y-2">
              {ticketDetails.map((ticket, index) => (
                <div
                  key={index}
                  className="block md:grid md:grid-cols-3 gap-4 bg-navy-700 rounded-lg p-3 hover:bg-navy-600 transition-colors"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden mb-2">
                    <div className="flex justify-between text-gray-400 text-xs mb-1">
                      <span>TICKET ID</span>
                      <span>DRAW ID</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-semibold text-sm truncate">
                        {ticket?.ticketId || "Unknown"}
                      </span>
                      <span className="text-yellow-500 font-semibold">
                        { "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:block text-white font-semibold text-sm">
                    {ticket?.ticketId || "Unknown"}
                  </div>

                  {/* Numbers - Both Layouts */}
                  <div className="flex flex-wrap justify-center md:justify-start">
                    {ticket?.numbers?.map((num, idx) => (
                      <div
                        key={idx}
                        className="bg-navy-800 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-xs md:text-sm font-bold">
                          {num}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Draw ID - Desktop Only */}
                  <div className="hidden md:block text-yellow-500 font-semibold text-center text-sm">
                    {"N/A"}
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
