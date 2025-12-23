import { useEffect, useMemo, useState } from "react";
import AuthContext from "./AuthContext.jsx";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = ({ user }) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

   
    const authValue = useMemo(() => ({ user, login, logout, loading }), [user, loading]);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};
