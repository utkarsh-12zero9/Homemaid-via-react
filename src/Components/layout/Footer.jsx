import { Link } from 'react-router-dom';
import logo from '../../assets/icons/Logo_homemaid.png';

function Footer() {
    return (
        <footer className="bg-[#00246B] text-white py-6 px-4 sm:py-8 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex  mb-6 sm:mb-8">
                    <img src={logo} alt="HomeMaid Logo" className="h-10 w-auto sm:h-12 md:h-16 max-w-full object-contain" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 p-3">
                    {/* Navigation Links */}
                    <div className="mb-6 sm:mb-0">
                        <h3 className="text-lg font-bold font-poppins underline mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/booking" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                    Booking
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="mb-6 sm:mb-0">
                        <h3 className="text-lg font-bold font-poppins underline mb-4">Follow Us</h3>
                        <div className="flex flex-col space-y-2">
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://facebook.com" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/" className="hover:text-[#10B981] transition-colors font-poppins text-xs sm:text-sm">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-poppins underline mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="font-poppins text-xs sm:text-sm">Email: support@homemaid.com</li>
                            <li className="font-poppins text-xs sm:text-sm">Phone: +91-9876543210</li>
                            <li className="font-poppins text-xs sm:text-sm">Address: Phase-1, Muradanagar, Uttar Pradesh</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 sm:mt-8 text-center font-poppins text-xs sm:text-sm">
                    <p>© 2025 HomeMaid. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;