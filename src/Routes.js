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
import ProtectAdmin from "./Components/Admin/ProtectAdmin";
import Protected from './Components/Auth/Protected';
import QuizSubmissionPage from "./QuizSubmit";
import ResultTable from "./Result";

function Router() {
  return (
    <Routes>
      {/* Access Without Login */}
      <Route path="/" element={<Home />} />
      <Route path="/forget" element={<PassReset />} />
      <Route path="/catlog" element={<Catlogs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/inst" element={<Instructors />} />

      {/* Admin Routes */}
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminreg" element={<AdminReg />} />
      <Route path="/admin" element={<ProtectAdmin Component={AdminPanel} />} />
      <Route path="/createcourse" element={<ProtectAdmin Component={CreateCourse}/>}/>
      <Route path="/createquiz" element={<ProtectAdmin Component={CreateQuiz}/>}/>
      <Route path="/addinstructor" element={<ProtectAdmin Component={AddInstructor}/>}/>

      {/* User Routes */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegForm />} />
      <Route path="/profile" element={<Protected Component={UserProfilePage}/>} />
      <Route path="/submitquiz" element={<Protected Component={QuizSubmissionPage} />}/>
      <Route path="/result" element={<Protected Component={ResultTable} />}/>
      <Route path="/lms" element={<Protected Component={App} />} />
      <Route path="/selectquiz" element={<Protected Component={SelectQuiz} />} />
      <Route path="/startquiz" element={<Protected Component={Quiz} />} />

      {/* <Route path="/" element={<Home />} />
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
      <Route path="/submitquiz" element={<QuizSubmissionPage/>}/>
      <Route path="/result" element={<ResultTable/>}/> */}
    </Routes>
  );
}
export default Router;
