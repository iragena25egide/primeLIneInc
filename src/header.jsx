import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-gray-900 transition-all ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo and Menu Button */}
        <div className="flex items-center">
          <button
            className="block md:hidden text-white text-xl mr-4"
            onClick={() => setMenuActive(!menuActive)}
          >
            &#9776;
          </button>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/image/logo4.png"
              alt="Logo"
              className="w-12 md:w-16"
            />
            <p className="font-sans text-xl md:text-2xl text-white font-medium ml-2">
              Prime<span className="text-blue-700">Line</span>
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            menuActive ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-gray-900 md:relative md:top-auto md:left-auto md:w-auto md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
            <li>
              <Link
                to="/about-us"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/innovation"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                INNOVATION
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                CAREERS
              </Link>
            </li>
            {/* Dropdown Menu */}
            <li className="relative group">
              <span className="block text-white py-2 md:py-0 cursor-pointer md:inline-block hover:text-blue-400">
                LEARN MORE
              </span>
              <div className="absolute hidden top-full left-1/2 transform -translate-x-1/2 bg-gray-900 shadow-md group-hover:block md:group-hover:flex">
                <ul className="flex flex-col text-center p-4 space-y-2">
                  <li>
                    <Link
                      to="/emergency-service"
                      className="text-white hover:text-blue-400"
                    >
                      EMERGENCY SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/customer-care"
                      className="text-white hover:text-blue-400"
                    >
                      CUSTOMER CARE
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact-us"
            className="px-4 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-gray-900 transition"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
