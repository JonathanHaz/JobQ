import Home from "./pages/Home/Home";
import Navbar from "./components/Navigation/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Auth from "./pages/Auth/Auth";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
