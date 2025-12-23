import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";


const PrivateRoute = ({ children }) => {
    const { loading , user } = useAuth();

    if (loading) {

        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
