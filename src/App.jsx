import Profile from "./Profile";
import Course from "./Course";
import Assignment from "./Assignment";
import Home from "./Home";
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Assignment" element={<Assignment />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;