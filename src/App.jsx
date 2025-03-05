import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Navbar from './Components/Navbar.jsx';
import Footer from './components/Footer';
import './index.css';  // ייבוא העיצוב הכללי של הדף
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import CustomerPage from './pages/CustomerPage';
import Pricing from './pages/Pricing';
import Schedule from './Components/Schedule.jsx';
function App() {
  return (
    <Router>
      <Navbar /> {/* ה-navbar יישאר בקצה העליון */}
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/schedule" element={<Schedule />} />
        
        </Routes>
      </div>
      <Footer /> {/* ה-footer יישאר בתחתית */}
    </Router>
    
  );
}

export default App;
