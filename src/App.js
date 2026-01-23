import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeContainer from "./components/home/HomeContainer";
import Courses from "./components/courses/Courses";
import CourseDetails from "./components/courses/CourseDetails";
import Careers from "./components/careers/Careers";
import LoginContainer from "./components/signup/LoginContainer";
import SignUpContainer from "./components/signup/SignupContainer";
import SignUp from "./components/signup/Signup";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/signup" element={<SignUpContainer />} />
            <Route path="/signup/form" element={<SignUp />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
