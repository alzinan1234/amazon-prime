import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Image from "next/image";
import logo from "../../src/components/image/logo-min-remaster.png";

const Navbar = () => {
  return (
    <nav className="bg-[black] text-white px-4 py-3 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo} // Replace with actual logo image path
            alt="Amazon Prime"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <div className="flex flex-col items-center cursor-pointer">
            <FaUser className="text-xl" />
            <span className="text-xs">Account</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaShoppingCart className="text-xl" />
            <span className="text-xs">Cart</span>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden mt-2">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md text-black"
            placeholder="Search Amazon Prime"
          />
          <button className="absolute top-0 right-0 bg-yellow-400 px-4 py-2 rounded-r-md">
            <FaSearch className="text-black" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
