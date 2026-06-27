import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({children}) => {

  // Get user from AuthContext
  const { user } = useContext(AuthContext);

  // If user not logged in
  // redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // if user logged in
  // show requested page
  return children;  
};

export default ProtectedRoutes;

