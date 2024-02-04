import Home from "./pages/Home/Home";
import Navbar from "./components/Navigation/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
