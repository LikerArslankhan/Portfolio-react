import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">

      {/* FIXED BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/50 -z-10"></div>

      {/* UI LAYER */}
      <div className="relative z-10">

        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

       
       

      </div>
    </div>
  );
};

export default App;
