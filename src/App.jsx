import Home from "./pages/Home/Home";
import Navbar from "./components/Navigation/Navbar";
import Auth from './pages/Auth/Auth'
import JobFinder from "./pages/JobFinder/JobFinder";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/search" element={<JobFinder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
