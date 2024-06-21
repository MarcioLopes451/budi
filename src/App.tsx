import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import FindABudi from "./pages/FindABudi/FindABudi";
import BeABudi from "./pages/BeABudi/BeABudi";

function App() {
  return (
    <>
      <div className="font-Poppins">
        <Navbar />
        <Routes>
          <Route path="/budi/" element={<Home />} />
          <Route path="/budi/findabudi" element={<FindABudi />} />
          <Route path="/budi/beabudi" element={<BeABudi />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
