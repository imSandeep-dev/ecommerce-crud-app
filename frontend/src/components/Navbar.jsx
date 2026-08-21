import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-[#d45b3f]" : "text-[#60716c] hover:text-[#18302b]"
    }`;

  return (
    <nav className="sticky top-0 z-10 border-b border-[#dfe3dc] bg-[#f7f5f0]/90 px-5 py-4 backdrop-blur md:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
      <NavLink to="/" className="text-xl font-black tracking-[-0.04em] text-[#18302b]">
        Common<span className="text-[#d45b3f]">Goods.</span>
      </NavLink>
      <div className="flex items-center gap-5 md:gap-8">
        <NavLink to="/" end className={linkClass}>
          Products
        </NavLink>
        <NavLink to="/add" className={linkClass}>
          Add Product
        </NavLink>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;