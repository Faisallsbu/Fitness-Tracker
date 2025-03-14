import React from "react";
import { ActivitySquare, Dumbbell, Running } from "lucide-react";

const workouts = [
  {
    id: 1,
    name: "Morning Run",
    type: "Cardio",
    duration: "30 min",
    date: "Today",
    icon: Running,
  },
  {
    id: 2,
    name: "Upper Body",
    type: "Strength",
    duration: "45 min",
    date: "Yesterday",
    icon: Dumbbell,
  },
  {
    id: 3,
    name: "HIIT Session",
    type: "Interval",
    duration: "25 min",
    date: "2 days ago",
    icon: ActivitySquare,
  },
];

const WorkoutSummary = () => {
  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <workout.icon className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{workout.name}</p>
            <p className="text-xs text-muted-foreground">{workout.type} • {workout.duration}</p>
          </div>
          <div className="text-xs text-muted-foreground">{workout.date}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutSummary;
