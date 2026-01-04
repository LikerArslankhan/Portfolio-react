import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between px-10 py-6 text-white bg-gray-900/2 backdrop-blur-md z-50">
      <h1 className="text-2xl font-bold tracking-[10px] text-lime-500">Liker</h1>

      <div className="flex gap-10 text-lg font-semibold">
        <Link to="/" className="hover:text-lime-400 transition">Home</Link>
        <Link to="/about" className="hover:text-lime-400 transition">About</Link>
        <Link to="/service" className="hover:text-lime-400 transition">Services</Link>
        <Link to="/contact" className="hover:text-lime-400 transition">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
