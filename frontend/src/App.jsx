import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
const Login = lazy(() => import("./pages/auth/Login.jsx"));
const Register = lazy(() => import("./pages/auth/Register.jsx"));
const TaskDashboard = lazy(() => import("./pages/tasks/TaskDashboard.jsx"));
import PrivateRoute from "./components/common/PrivateRoute.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import Loader from "./components/ui/Loader.jsx";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />
        <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <TaskDashboard />
            </PrivateRoute>
            } />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App