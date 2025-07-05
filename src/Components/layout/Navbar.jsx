import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { LoginContext } from '../../App';
import logo from '../../assets/icons/Logo_homemaid.png';
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, userType } = useContext(LoginContext);
  const navigate = useNavigate();

  const goToProfile = () => {
    if (userType === "user") {
      navigate('/user-dashboard');
    } else if (userType === "provider") {
      navigate('/provider-dashboard');
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setIsOpen(false);
    }
  }, [isLoggedIn]);

  return (
    <nav className="bg-[#00246B] text-white h-20 px-4 shadow-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-poppins leading-none">
          <img src={logo} alt="HomeMaid Logo" className="h-14 w-auto rounded-lg" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1 hover:scale-110 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors">Home</Link>
          <Link to="/about" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors">About</Link>
          <Link to="/services" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors">Services</Link>
          <Link to="/providers" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors">Providers</Link>
          {isLoggedIn ? (
            <button
              onClick={goToProfile}
              className="font-poppins text-white bg-[#2c8fff] px-4 py-3 rounded-full text-base leading-none hover:bg-emerald-500 hover:text-white transition-all shadow-md hover:shadow-lg cursor-pointer flex gap-2"
            >
              <FaUserCircle /> Profile
            </button>
          ) : (
            <>
              <Link to="/login" className="font-poppins text-white bg-[#10B981] px-4 py-2 rounded-md text-base leading-none hover:bg-green-500 hover:text-white transition-all shadow-md hover:shadow-lg">
                Login
              </Link>
              <Link to="/signup" className="font-poppins text-white bg-[#10B981] px-4 py-2 rounded-md text-base leading-none hover:bg-green-500 hover:text-white transition-all shadow-md hover:shadow-lg">
                Sign Up
              </Link>
            </>
          )}
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#00246B] shadow-md z-10">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/providers" className="font-poppins text-base leading-none hover:text-[#10B981] transition-colors" onClick={() => setIsOpen(false)}>Providers</Link>
              {isLoggedIn ? (
                <button
                  onClick={goToProfile}
                  className="font-poppins text-white bg-[#10B981] px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base hover:bg-teal-700 hover:text-white transition-all cursor-pointer"
                >
                  Profile
                </button>
              ) : (
                <div className='grid grid-cols-2 gap-2'>
                  <Link to="/login" className="font-poppins  font-bold text-white bg-[#10B981] px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base hover:bg-teal-700 hover:text-white transition-all text-center" onClick={() => setIsOpen(false)}>Login</Link>
                  <Link to="/signup" className="font-poppins font-bold  text-white bg-[#10B981] px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base hover:bg-teal-700 hover:text-white transition-all text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;