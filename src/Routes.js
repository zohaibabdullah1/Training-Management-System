import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import LoginForm from "./Components/Auth/Login";
import RegForm from "./Components/Auth/Register";
import Catlogs from "./Catlog";
import PassReset from "./Pass_reset";
import App from "./StudentPortal";
import AdminPanel from "./Admin";
import AdminLogin from './Components/Admin/AdminLogin';
import AdminReg from './Components/Admin/AdminReg';
import SelectQuiz from "./SelectQuiz";
import Cpp from "./C++";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Quiz from "./Quiz";
import Instructors from "./Instructors";
import UserProfilePage from "./UserProfile";
import CreateCourse from "./CreateCourse";
import CreateQuiz from "./CreateQuiz";
import AddInstructor from "./AddInstructor";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegForm />} />
      <Route path="/catlog" element={<Catlogs />} />
      <Route path="/forget" element={<PassReset />} />
      <Route path="/lms" element={<App />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminreg" element={<AdminReg />} />
      <Route path="/selectquiz" element={<SelectQuiz />} />
      <Route path="/startquiz" element={<Quiz />} />
      <Route path="/cpp" element={<Cpp />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/inst" element={<Instructors />} />
      <Route path="/profile" element={<UserProfilePage/>} />
      <Route path="/createcourse" element={<CreateCourse/>}/>
      <Route path="/createquiz" element={<CreateQuiz/>}/>
      <Route path="/addinstructor" element={<AddInstructor/>}/>
    </Routes>
  );
}
export default Router;
