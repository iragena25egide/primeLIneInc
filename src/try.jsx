import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmergencyShare, MdRecordVoiceOver } from "react-icons/md";
import { SiCustomink } from "react-icons/si";

const NetworkCommunications = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("");
  const fullText = "PrimeLine Scale At Speed";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-fit text-white md:h-fit"
      style={{ backgroundImage: `url('/image/home.jpg')` }}
    >
      {/* Overlay for darker background effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header Section */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-8 py-3">
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
          } absolute top-full left-0 w-full p-4 md:relative md:top-auto md:left-auto md:w-auto md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
            <li className="relative group">
              <Link
                to="/about-us"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                ABOUT US
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100 transition-opacity"></span>
            </li>

            <li className="relative group">
              <Link
                to="/innovation"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                INNOVATION
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100 transition-opacity"></span>
            </li>

            <li className="relative group">
              <Link
                to="/careers"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                CAREERS
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100 transition-opacity mt-5"></span>
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

        <button className="relative group w-[10%] text-[14px] h-[40px] text-[#fff] font-medium rounded-[20px_20px_20px_5px] cursor-pointer text-center bg-transparent hidden md:block">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[20px_20px_20px_5px] p-[2px]">
            <span className="relative flex items-center justify-center w-full h-full bg-transparent rounded-[20px_20px_20px_5px]">
            <Link to={'/contact-us'}>Contact Us</Link>  
            </span>
          </span>
        </button>
      </header>
      <div className="flex justify-center items-center h-[60px] mt-20">
        <h2
          className="text-4xl font-poetsen md:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          {currentText}
        </h2>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-12 mt-20">
  {/* Emergency Services Card */}
  <div className="bg-black bg-opacity-70 p-6 rounded-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
    <div className="flex items-center space-x-4">
      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-2xl font-bold">
        <MdOutlineEmergencyShare size={24} className="text-blue-700" />
        </span>
      </div>
      <h2 className="text-xl font-semibold">Emergency Services</h2>
    </div>
    <p className="mt-4">Compassionate support in crisis situations</p>
  </div>

  {/* Customer Care Card */}
  <div className="bg-black bg-opacity-70 p-6 rounded-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up delay-100">
    <div className="flex items-center space-x-4">
      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-2xl font-bold">
        <SiCustomink size={24} className="text-blue-700" />
        </span>
      </div>
      <h2 className="text-xl font-semibold">Customer Care</h2>
    </div>
    <p className="mt-4">
      Scalable call centers adapted to task, brand, and industry
    </p>
  </div>

  {/* Voice-to-Cloud Card */}
  <div className="bg-black bg-opacity-70 p-6 rounded-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up delay-200">
    <div className="flex items-center space-x-4">
      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-2xl font-bold">
        <MdRecordVoiceOver size={24} className="text-blue-700" />
        </span>
      </div>
      <h2 className="text-xl font-semibold">Voice-to-Cloud</h2>
    </div>
    <p className="mt-4">
      Modernization of traditional telecommunication platforms and
      applications
    </p>
  </div>
</div>

    </div>
  );
};

export default NetworkCommunications;
