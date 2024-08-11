import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./components/Add"; // Import the Add component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} /> {/* Add Route */}
      </Routes>
    </>
  );
}

export default App;
