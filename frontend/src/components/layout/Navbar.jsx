import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { logoutUser } from "../../api/auth.api.js";
import toast from "react-hot-toast";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = useCallback(async () => {
        try {
            await logoutUser();
            logout();
            toast.success("Logged out");
            navigate("/login");
        } catch (error) {
            toast.error(error);
        }
    }, [logout, navigate]);

    return (
        <header className="bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center text-sm font-semibold">
                            T
                        </div>
                        <span className="text-sm font-semibold text-gray-900 tracking-tight">
                            Taskly
                        </span>
                    </div>

                    {user && (
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex flex-col text-right">
                                <span className="text-sm font-medium text-gray-900">{user.name}</span>
                                <span className="text-xs text-gray-500">{user.email}</span>
                            </div>

                            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                                {user?.name?.charAt(0).toUpperCase()}
                            </div>

                            <button
                                className="text-sm text-gray-600 hover:text-black transition"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
