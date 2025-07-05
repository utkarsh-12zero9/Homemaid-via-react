import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../App';
import providerProfilePhoto from "../../assets/images/maleHelper.jpg";
import { motion, AnimatePresence } from 'framer-motion';

function ProviderDashboard() {
    const [provider, setProvider] = useState({
        name: "Priya Sharma",
        phone: "9876543210",
        availability: "9 AM - 5 PM",
        photo: null,
    });
    const [editedProvider, setEditedProvider] = useState({ ...provider });
    const [bookings] = useState([
        { id: 1, service: "Cooking", date: "2025-06-30", customer: "Shreya Jain" },
        { id: 2, service: "Laundry", date: "2025-07-01", customer: "Ravi Sharma" },
    ]);
    const [earnings] = useState({
        recent: [
            { id: 1, amount: 1000, date: "2025-06-28", service: "Cooking" },
            { id: 2, amount: 800, date: "2025-06-27", service: "Laundry" },
        ],
        total: 1800,
    });
    const [feedbacks] = useState([
        { id: 1, feedback: "Great cooking skills!", stars: 4, tip: 200 },
        { id: 2, feedback: "Excellent laundry service!", stars: 5, tip: 300 },
    ]);
    const { setIsLoggedIn, provider: contextProvider } = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        const savedProvider = localStorage.getItem('provider');
        if (savedProvider) {
            setProvider(JSON.parse(savedProvider));
            setEditedProvider(JSON.parse(savedProvider));
        } else if (contextProvider) {
            setProvider({ ...contextProvider });
            setEditedProvider({ ...contextProvider });
        }
    }, [contextProvider]);

    const handleSave = () => {
        setProvider({ ...editedProvider });
        localStorage.setItem('provider', JSON.stringify(editedProvider));
        alert("Profile updated successfully!");
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        setEditedProvider({ ...editedProvider, photo: file ? URL.createObjectURL(file) : null });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('provider');
        setProvider(null);
        navigate('/');
    };

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    };
    const buttonVariants = {
        hover: { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(16, 185, 129, 0.18)' },
        tap: { scale: 0.97 }
    };
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    };
    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08 + 0.2, duration: 0.5, ease: 'easeOut' }
        })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-teal-200 py-12 px-4 sm:px-6 lg:px-8" role="main" aria-label="Provider Dashboard">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex items-center justify-between mb-12 header-animation relative"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        className="text-2xl font-extrabold font-poppins  text-[#00246B] header-animation"
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Welcome, {provider.name}!
                    </motion.p>
                    <motion.button
                        onClick={handleLogout}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-gradient-to-r from-teal-600 via-blue-500 to-teal-400 text-white font-poppins text-base font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 logout-button cursor-pointer border-2 border-teal-500 hover:border-teal-300"
                        aria-label="Logout"
                    >
                        Logout
                    </motion.button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <motion.div
                        className="bg-white/80 glassmorphism p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 profile-card border border-teal-100 backdrop-blur-md"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="profile-heading">
                            Profile
                        </h2>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-32 h-32 bg-teal-100 rounded-full overflow-hidden border-2 border-teal-200">
                                <img
                                    src={editedProvider.photo || providerProfilePhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <label htmlFor="photo-upload" className="cursor-pointer text-teal-600 hover:text-teal-800 font-poppins transition-colors px-3 py-2 rounded-lg bg-teal-50 hover:bg-teal-100 shadow-md text-sm font-semibold">
                                Upload Photo
                            </label>
                            <input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="hidden"
                                aria-labelledby="profile-heading"
                            />
                            <input
                                type="text"
                                value={editedProvider.name}
                                onChange={(e) => setEditedProvider({ ...editedProvider, name: e.target.value })}
                                className="w-full p-3 border border-teal-200 rounded-lg font-poppins focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                placeholder="Name"
                                aria-label="Name"
                            />
                            <input
                                type="tel"
                                value={editedProvider.phone}
                                onChange={(e) => setEditedProvider({ ...editedProvider, phone: e.target.value })}
                                className="w-full p-3 border border-teal-200 rounded-lg font-poppins focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                placeholder="Phone"
                                aria-label="Phone"
                            />
                            <input
                                type="text"
                                value={editedProvider.availability}
                                onChange={(e) => setEditedProvider({ ...editedProvider, availability: e.target.value })}
                                className="w-full p-3 border border-teal-200 rounded-lg font-poppins focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                placeholder="Availability (e.g., 9 AM - 5 PM)"
                                aria-label="Availability"
                            />
                            <motion.button
                                onClick={handleSave}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="w-full bg-gradient-to-r from-teal-600 via-blue-500 to-teal-400 text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg cursor-pointer border-2 border-teal-500 hover:border-teal-300"
                                aria-label="Save profile changes"
                            >
                                Save Changes
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-2 bg-white/80 glassmorphism p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-teal-100 backdrop-blur-md min-h-[300px]"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="bookings-heading">
                            Upcoming Bookings
                        </h2>
                        <ul className="space-y-4">
                            <AnimatePresence>
                                {bookings.length === 0 ? (
                                    <motion.p
                                        className="text-gray-600 font-poppins"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >No bookings yet.</motion.p>
                                ) : (
                                    bookings.map((booking, i) => (
                                        <motion.li
                                            key={booking.id}
                                            className="text-gray-700 font-poppins p-4 bg-teal-50 rounded-xl booking-item border border-teal-100"
                                            custom={i}
                                            variants={listItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                        >
                                            {booking.service} for {booking.customer} on {booking.date}
                                        </motion.li>
                                    ))
                                )}
                            </AnimatePresence>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-3 bg-white/80 glassmorphism p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-teal-100 backdrop-blur-md min-h-[180px]"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="feedbacks-heading">
                            Customer Feedbacks
                        </h2>
                        <ul className="space-y-3">
                            <AnimatePresence>
                                {feedbacks.map((feedback, i) => (
                                    <motion.li
                                        key={feedback.id}
                                        className="text-gray-700 font-poppins p-3 bg-teal-50 rounded-xl feedback-item border border-teal-100"
                                        custom={i}
                                        variants={listItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        <p>{feedback.feedback}</p>
                                        <div className="flex items-center space-x-1 mt-2">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i} className="text-yellow-500">
                                                    {i < feedback.stars ? '★' : '☆'}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-2">Tip: ₹{feedback.tip}</p>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-3 bg-white/80 glassmorphism p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-teal-100 backdrop-blur-md min-h-[180px]"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="earnings-heading">
                            Earnings Overview
                        </h2>
                        <p className="text-lg font-poppins text-gray-700">
                            Total Earnings: ₹{earnings.total}
                        </p>
                        <h3 className="text-md font-semibold text-teal-800 font-poppins mt-4 mb-2">
                            Recent Transactions
                        </h3>
                        <ul className="space-y-2">
                            <AnimatePresence>
                                {earnings.recent.map((transaction, i) => (
                                    <motion.li
                                        key={transaction.id}
                                        className="text-gray-700 font-poppins p-3 bg-teal-50 rounded-xl earnings-item border border-teal-100"
                                        custom={i}
                                        variants={listItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        ₹{transaction.amount} for {transaction.service} on {transaction.date}
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ProviderDashboard;