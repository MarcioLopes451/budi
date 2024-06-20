import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="font-Poppins">
        <Navbar />
        <Routes>
          <Route path="/budi/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
