import Home from "./pages/Home/Home";
import Navbar from "./components/Navigation/Navbar";
import Auth from "./pages/Auth/Auth";
import JobFinder from "./pages/JobFinder/JobFinder";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./context/Global";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import ThankYou from "./components/ThankYou/ThankYou";
import HR from "./pages/HR/HR";

function App() {
  const { user } = useContext(userContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {!user?
          <>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Auth />} />
         </>
          :
          <>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<JobFinder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/hr" element={<HR />} />
           <Route path="/thankYou" element={<ThankYou />} />
          </>
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
