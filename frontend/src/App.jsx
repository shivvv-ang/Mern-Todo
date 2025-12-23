
import { AuthProvider } from "./context/AuthProvider.jsx";
import Login from "./pages/auth/Login.jsx"
import Register from "./pages/auth/Register.jsx"
import TaskDashboard from "./pages/tasks/TaskDashboard.jsx"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute.jsx";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App