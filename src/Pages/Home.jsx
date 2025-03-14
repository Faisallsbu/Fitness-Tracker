import React from "react";
import Dashboard from "./Dashboard"; // Adjust path as per your structure

const Home = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Welcome to your fitness dashboard</p>

      {/* Card Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Today's Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Today's Summary</h2>
          <p className="text-gray-500">Your activity summary will be shown here</p>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Weekly Progress</h2>
          <p className="text-gray-500">Your weekly stats will be shown here</p>
        </div>

        {/* Next Workout */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Next Workout</h2>
          <p className="text-gray-500">Your upcoming workout will be shown here</p>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
