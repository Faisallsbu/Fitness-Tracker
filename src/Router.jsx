import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./Components/Sign_up";
import Signin from "./Components/Sign_in";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Workout from "./Pages/Workout";
import Progress from "./Pages/Progress";
import Goals from "./Pages/Goals";
import PrivateRoute from "./Components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "home", element: <Home /> },
      { path: "workouts", element: <Workout /> },
      { path: "progress", element: <Progress /> },
      { path: "goals", element: <Goals /> },
    ],
  },
]);
