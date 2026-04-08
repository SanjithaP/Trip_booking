
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './routes/home.js';
import Service from './routes/service.js';
import About from './routes/about.js';
import Contact from './routes/contact.js';
import Navbar from './components/Navbar.js';
import TravelPlan from './components/TravelPlan'; 

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/travel-plan" element={<TravelPlan />} /> {/* Add this line */}
    </Routes>

    </div>
  );
}

export default App;
