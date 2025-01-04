import api from "../../services/api.interceptor";
import { useEffect, useState } from "react";

const LotteryActivity = () => {
  const [query, setQuery] = useState({
    status: "all",
  });
  const [ticketDetails, setTicketDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // Default active tab

  useEffect(() => {
    fetchTicketDetails();
  }, [query]);

  const fetchTicketDetails = async () => {
    try {
      const response = await api.post("/user-tickets", { query });
      console.log("response", response?.data);
      setTicketDetails(response?.data?.result || []);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Update query based on tab
    switch (tab) {
      case "active":
        setQuery({ status: "active" });
        break;
      case "expired":
        setQuery({ status: "expired" });
        break;
      case "history":
        setQuery({ status: "history" });
        break;
      default:
        setQuery({ status: "all" });
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}

        <div className="text-center mb-8">
          <h3 className="text-red-500 text-lg font-semibold mb-2">
            {activeTab.toUpperCase()}
          </h3>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            LATEST ACTIVITIES
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            The worlds first truly fair and global lottery. Each player has the
            highest chances to win the JACKPOT
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "active"
                ? "bg-red-500 text-white"
                : "bg-navy-800 text-white hover:bg-navy-700"
            }`}
            onClick={() => handleTabChange("active")}
          >
            ACTIVE
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "expired"
                ? "bg-red-500 text-white"
                : "bg-navy-800 text-white hover:bg-navy-700"
            }`}
            onClick={() => handleTabChange("expired")}
          >
            EXPIRED
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "history"
                ? "bg-red-500 text-white"
                : "bg-navy-800 text-white hover:bg-navy-700"
            }`}
            onClick={() => handleTabChange("history")}
          >
            HISTORY
          </button>
        </div>

        {/* Activity Table */}
        <div className="bg-navy-800 rounded-lg p-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-gray-400 text-sm mb-4 px-4">
            <div className="col-span-3 md:col-span-4">USER</div>
            <div className="col-span-7 md:col-span-6">TICKET NUMBERS</div>
            <div className="col-span-2">TICKETS ID</div>
          </div>

          {/* Table Rows */}
          {ticketDetails && ticketDetails.length > 0 ? (
            ticketDetails.map((ticket, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 items-center bg-navy-700 rounded-lg p-4 mb-2 hover:bg-navy-600 transition-colors"
              >
                {/* User Column */}
                <div className="col-span-3 md:col-span-4 flex items-center gap-3">
                  <span className="text-white font-semibold hidden md:block">
                    {ticket?.user || "Unknown"}
                  </span>
                </div>

                {/* Numbers Column */}
                <div className="col-span-7 md:col-span-6 flex flex-wrap gap-2">
                  {ticket?.numberSets?.map((numberSet, i) => (
                    <span
                      key={i}
                      className="bg-navy-800 text-red-500 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    >
                      {numberSet?.numbers?.join(", ") || "N/A"}
                    </span>
                  ))}
                </div>

                {/* Tickets Column */}
                <div className="col-span-2 text-yellow-500 font-semibold text-center">
                  {ticket?.ticketId || "N/A"}
                </div>
              </div>
            ))
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
