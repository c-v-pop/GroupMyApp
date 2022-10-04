import useToken from "../App/useToken";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { getToken } = useToken();
    const token = getToken();
    if (!token) {
        // user is not authenticated
        return <Navigate to="/Login" />;      
      }
      return children;
}

export default ProtectedRoute;