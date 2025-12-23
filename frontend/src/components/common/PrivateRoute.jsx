import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import Loader from "../ui/Loader.jsx";

const PrivateRoute = ({ children }) => {
    const { loading , user } = useAuth();

    if (loading) {

        return <Loader/>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
