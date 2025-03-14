import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, ActivitySquare, BarChart3, Trophy, Settings, UserCircle, LogOut, Menu } from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-900 text-white w-64 p-5 transition-all ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <div className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Fitness Tracker</h2>
          <button className="md:hidden text-gray-400" onClick={() => setIsSidebarOpen(false)}>✖</button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <NavLink to="/dashboard/home" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700">
                <Home size={20} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/workouts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700">
                <ActivitySquare size={20} />
                <span>Workouts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/progress" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700">
                <BarChart3 size={20} />
                <span>Progress</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/goals" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700">
                <Trophy size={20} />
                <span>Goals</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700">
                <Settings size={20} />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-gray-700">
          <NavLink to="/dashboard/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700">
            <UserCircle size={20} />
            <span>Profile</span>
          </NavLink>
          <button className="flex items-center gap-3 p-3 w-full text-red-500 hover:bg-gray-700">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <button className="md:hidden mb-4 text-gray-700" onClick={() => setIsSidebarOpen(true)}>
          <Menu size={24} />
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
