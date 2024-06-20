import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="font-Poppins">
        <Navbar />
        <Routes>
          <Route path="/budi/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
