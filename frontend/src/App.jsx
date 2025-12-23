import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import TaskDashboard from "./pages/tasks/TaskDashboard"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<TaskDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App