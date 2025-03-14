import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { session } = UserAuth(); // Get session from context

  if (!session) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
