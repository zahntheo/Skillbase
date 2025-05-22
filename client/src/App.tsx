import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import RegisterPage from "./pages/Register/RegisterPage";
import NotificationsPage from "./pages/Notifications/NotificationPage";
import GeneralSettingsPage from "./pages/Settings/GeneralSettingsPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import EditProfile from "./pages/Profile/EditProfile";
import ProfileSettings from "./pages/Profile/ProfileSettings";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/generalSettings" element={<GeneralSettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/profileSettings" element={<ProfileSettings />} />
    </Routes>
  );
}

export default App;



