import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About'
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About></About>}></Route>
        <Route path="appointment" element={<Appointment></Appointment>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
