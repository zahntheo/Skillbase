import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import RegisterPage from "./pages/Register/RegisterPage";
import NotificationsPage from "./pages/Notifications/NotificationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;



