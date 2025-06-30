import { Link } from 'react-router-dom';

// Footer component: Links, contact info, and social icons
function Footer() {
    return (
        <footer className="bg-[#00246B] text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center lg:justify-items-center gap-24">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-bold font-poppins underline mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-[#10B981] transition-colors font-poppins">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-[#10B981] transition-colors font-poppins">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-[#10B981] transition-colors font-poppins">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#10B981] transition-colors font-poppins">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/booking" className="hover:text-[#10B981] transition-colors font-poppins">
                                    Booking
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-[#10B981] transition-colors font-poppins">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup" className="hover:text-[#10B981] transition-colors font-poppins">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-poppins underline mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="font-poppins">Email: support@homemaid.com</li>
                            <li className="font-poppins">Phone: +91-9876543210</li>
                            <li className="font-poppins">Address: Phase-1, Muradanagar, Uttar Pradesh</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-bold font-poppins underline mb-4">Follow Us</h3>
                        <div className="flex flex-col space-x-4">
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://facebook.com" className="hover:text-[#10B981] transition-colors font-poppins">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" className="hover:text-[#10B981] transition-colors font-poppins">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" className="hover:text-[#10B981] transition-colors font-poppins">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center font-poppins">
                    <p>&copy; 2025 HomeMaid. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;