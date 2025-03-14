import React from "react";
import { Dumbbell, Running, Yoga } from "lucide-react";

const upcomingWorkouts = [
  {
    id: 1,
    name: "5K Run",
    type: "Cardio",
    time: "Tomorrow, 6:00 AM",
    icon: Running,
  },
  {
    id: 2,
    name: "Leg Day",
    type: "Strength",
    time: "Thursday, 5:30 PM",
    icon: Dumbbell,
  },
  {
    id: 3,
    name: "Recovery Yoga",
    type: "Flexibility",
    time: "Friday, 7:00 PM",
    icon: Yoga,
  },
];

const UpcomingWorkouts = () => {
  return (
    <div className="space-y-4">
      {upcomingWorkouts.map((workout) => (
        <div key={workout.id} className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <workout.icon className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{workout.name}</p>
            <p className="text-xs text-muted-foreground">{workout.type}</p>
          </div>
          <div className="text-xs text-muted-foreground">{workout.time}</div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingWorkouts;
