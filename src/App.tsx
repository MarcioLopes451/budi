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

function App() {
  return (
    <>
      <div className="font-Poppins">
        <Navbar />
        <Routes>
          <Route path="/budi/" element={<Home />} />
          <Route path="/budi/findabudi" element={<FindABudi />} />
          <Route path="/budi/beabudi" element={<BeABudi />} />
          <Route path="/budi/formsubmitted" element={<FormSubmitted />} />
          <Route path="/budi/ourstory" element={<OurStory />} />
          <Route path="/budi/members" element={<Members />} />
          <Route path="/budi/realstories" element={<RealStories />} />
          <Route path="/budi/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
