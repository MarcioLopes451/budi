import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import FindABudi from "./pages/FindABudi/FindABudi";
import BeABudi from "./pages/BeABudi/BeABudi";
import FormSubmitted from "./pages/FormSubmitted/FormSubmitted";
import OurStory from "./pages/OurStory/OurStory";
import Members from "./pages/Members/Members";
import RealStories from "./pages/RealStories/RealStories";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import DesktopFooter from "./components/Footer/DesktopFooter";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      <div className="font-Poppins">
        <Navbar />
        <div className="pt-[120px] lg:pt-[149px]">
          <Routes>
            <Route path="/budi/" element={<Home />} />
            <Route path="/budi/findabudi" element={<FindABudi />} />
            <Route path="/budi/beabudi" element={<BeABudi />} />
            <Route path="/budi/formsubmitted" element={<FormSubmitted />} />
            <Route path="/budi/ourstory" element={<OurStory />} />
            <Route path="/budi/members" element={<Members />} />
            <Route path="/budi/realstories" element={<RealStories />} />
            <Route path="/budi/login" element={<Login />} />
            <Route path="/budi/register" element={<Register />} />
            <Route path="/budi/contact" element={<Contact />} />
          </Routes>
        </div>
        {width <= 768 ? <Footer /> : <DesktopFooter />}
      </div>
    </>
  );
}

export default App;
