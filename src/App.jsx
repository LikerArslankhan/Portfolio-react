import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";



const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1702541660859-ed9f8c632462?q=80&w=1332&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/50 -z-10" />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <main className="pt-24 relative z-20">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;
