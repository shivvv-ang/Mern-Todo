import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const login = ({ user }) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
