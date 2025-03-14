import React from "react";
import { useNavigate } from "react-router-dom";
import { ActivitySquare, BarChart3, Trophy } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Fitness Tracker</h1>
          <p className="mt-2 text-gray-600">
            Track your workouts, monitor progress, and achieve your goals
          </p>
        </div>

        {/* Buttons for Sign In and Create Account */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <button
            className="w-full py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
          <button
            className="w-full py-3 text-lg font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-12 space-y-6">
          <FeatureItem
            icon={<ActivitySquare size={24} className="text-blue-600" />}
            title="Log Your Workouts"
            description="Keep track of exercises, sets, reps, and weights"
          />
          <FeatureItem
            icon={<BarChart3 size={24} className="text-blue-600" />}
            title="Track Your Progress"
            description="View detailed charts and analytics of your fitness journey"
          />
          <FeatureItem
            icon={<Trophy size={24} className="text-blue-600" />}
            title="Set and Achieve Goals"
            description="Define targets and celebrate when you reach them"
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Feature Item Component
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 p-2 bg-blue-100 rounded-full">{icon}</div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default Index;
