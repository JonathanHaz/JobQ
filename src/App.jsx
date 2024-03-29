import Home from "./pages/Home/Home";
import Navbar from "./components/Navigation/Navbar";
import Auth from "./pages/Auth/Auth";
import Favorites from "./pages/favorites/Favorites";
import JobFinder from "./pages/JobFinder/JobFinder";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./context/Global";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import ThankYou from "./components/ThankYou/ThankYou";
import HR from "./pages/HR/HR";
import ChatGPT from "./pages/chatGPT/ChatGPT";

function App() {
  const { user, isHr } = useContext(userContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {!user ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Auth />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<JobFinder />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              {isHr ? <Route path="/hr" element={<HR />} /> : null}
              <Route path="/hr" element={<HR />} />
              <Route path="/thankYou" element={<ThankYou />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/chatGPT" element={<ChatGPT />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
