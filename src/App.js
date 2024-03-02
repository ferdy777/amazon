import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Navbar from "./pages/Navbar";
import Contactpage from "./pages/Contactpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/contactpage" element={<Contactpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
