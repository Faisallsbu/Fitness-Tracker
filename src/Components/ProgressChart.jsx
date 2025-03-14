import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  { name: "Mon", total: 45 },
  { name: "Tue", total: 60 },
  { name: "Wed", total: 30 },
  { name: "Thu", total: 75 },
  { name: "Fri", total: 50 },
  { name: "Sat", total: 90 },
  { name: "Sun", total: 40 },
];

const ProgressChart = () => {
  return (
    <div className="h-80 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Workout Progress (Minutes)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: "white", borderRadius: "8px", padding: "8px" }}
          />
          <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
