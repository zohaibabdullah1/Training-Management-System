import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import LoginForm from "./Components/Auth/Login";
import RegForm from "./Components/Auth/Register";
import Catlogs from "./Catlog";
import PassReset from "./Pass_reset";
import Dashboard from "./Components/Admin/Dashboard";
import App from "./Drawer";
import AdminPanel from "./Admin";
import Quiz from "./Quiz";
import Cpp from "./C++";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegForm />} />
      <Route path="/catlog" element={<Catlogs />} />
      <Route path="/forget" element={<PassReset />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/lms" element={<App />} />
      <Route path="/ap" element={<AdminPanel />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/cpp" element={<Cpp />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}
export default Router;
