import { useState, useContext, useEffect } from 'react';
import { LoginContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import userProfilePhoto from "../../assets/images/femaleHelper.jpg";
import { motion, AnimatePresence } from 'framer-motion';

function UserDashboard() {
    const { isLoggedIn, user, bookings, setBookings, userType, setIsLoggedIn, setProvider, setUserType } = useContext(LoginContext);
    const navigate = useNavigate();
    const [editedUser, setEditedUser] = useState({ ...user });
    const [notifications, setNotifications] = useState([
        `New booking confirmed for Cooking on ${new Date().toLocaleDateString()}.`,
        `Your Laundry service is scheduled for tomorrow.`,
        `Reminder: Your Cleaning service is due next week.`,
    ]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
        const savedUser = localStorage.getItem(userType);
        if (savedUser) {
            setEditedUser(JSON.parse(savedUser));
        }
    }, [isLoggedIn, navigate, userType]);

    const handleSave = () => {
        setEditedUser({ ...editedUser });
        localStorage.setItem("user", JSON.stringify(editedUser));
        toast.success("Profile updated successfully!", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        setEditedUser({ ...editedUser, photo: file ? URL.createObjectURL(file) : null });
    };

    const toggleBookingStatus = (id) => {
        setBookings(bookings.map((booking) =>
            booking.id === id
                ? {
                    ...booking,
                    status: booking.status === "active"
                        ? "completed"
                        : booking.status === "completed"
                            ? "active"
                            : "completed",
                }
                : booking
        ));
    };

    const cancelBooking = (id) => {
        setBookings(bookings.filter((booking) => booking.id !== id));
        toast.success("Booking cancelled!", {
            position: "top-center",
            autoClose: 3000,
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setProvider(null);
        setUserType(null);
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const profileData = user;
    const defaultPhoto = userProfilePhoto;

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
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-teal-200 py-12 px-4 sm:px-6 lg:px-8" role="main" aria-label="User Dashboard">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex items-center justify-between mb-12 header-animation relative"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        className="text-2xl font-extrabold font-poppins text-[#00246B] header-animation"
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Welcome, {user?.name || "User"}!
                    </motion.p>
                    <motion.button
                        onClick={handleLogout}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-teal-600 text-white font-poppins text-base font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 logout-button cursor-pointer  hover:border-teal-300"
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
                                    src={editedUser.photo || defaultPhoto}
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
                                value={editedUser.name || profileData?.name || ""}
                                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                                className="w-full p-3 border border-teal-200 rounded-lg font-poppins focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                placeholder="Name"
                                aria-label="Name"
                            />
                            <input
                                type="email"
                                value={editedUser.email || "dummy@example.com"}
                                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                                className="w-full p-3 border border-teal-200 rounded-lg font-poppins focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                                placeholder="Email"
                                aria-label="Email"
                            />
                            <motion.button
                                onClick={handleSave}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="w-full bg-teal-600  text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg cursor-pointer  hover:border-teal-300"
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
                            Booking History
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
                                    bookings
                                        .filter((booking) => {
                                            const bookingDate = new Date(booking.date);
                                            bookingDate.setHours(0, 0, 0, 0);
                                            return bookingDate >= today;
                                        })
                                        .map((booking, i) => (
                                            <motion.li
                                                key={booking.id}
                                                className="text-gray-700 font-poppins p-4 bg-teal-50 rounded-xl flex justify-between items-center booking-item border border-teal-100"
                                                custom={i}
                                                variants={listItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                            >
                                                <span>
                                                    {booking.service} by {booking.provider || "Unknown"} on {booking.date}
                                                </span>
                                                <div>
                                                    <motion.button
                                                        onClick={() => toggleBookingStatus(booking.id)}
                                                        variants={buttonVariants}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                        className={`px-3 py-1 rounded-full text-sm font-medium mr-2 ${booking.status === "completed"
                                                            ? "bg-green-200 text-green-800 hover:bg-green-300"
                                                            : "bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
                                                            } transition-all`}
                                                        aria-label={`Toggle ${booking.service} status to ${booking.status === "completed" ? "active" : "completed"}`}
                                                    >
                                                        {booking.status === "completed" ? "Completed" : "Active"}
                                                    </motion.button>
                                                    <motion.button
                                                        onClick={() => cancelBooking(booking.id)}
                                                        variants={buttonVariants}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                        className="px-3 py-1 rounded-full text-sm font-medium bg-red-200 text-red-800 hover:bg-red-300 transition-all"
                                                        aria-label={`Cancel ${booking.service} booking`}
                                                    >
                                                        Cancel
                                                    </motion.button>
                                                </div>
                                            </motion.li>
                                        ))
                                )}
                            </AnimatePresence>
                        </ul>
                        <div className="flex justify-between mt-4">
                            <p className="text-sm text-gray-600 font-poppins">
                                <Link to="/history" className="text-teal-600 hover:text-teal-800 font-medium underline transition-colors">
                                    View Past Bookings
                                </Link>
                            </p>
                            <motion.button
                                onClick={() => navigate('/booking')}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="bg-teal-600  text-white font-poppins text-base font-semibold px-5 py-2 rounded-full shadow hover:bg-teal-700 transition-all cursor-pointer  hover:border-teal-300"
                                aria-label="New Booking"
                            >
                                New Booking
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-3 bg-white/80 glassmorphism p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-teal-100 backdrop-blur-md min-h-[180px]"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="notifications-heading">
                            Notifications 🔔
                        </h2>
                        <ul className="space-y-3">
                            <AnimatePresence>
                                {notifications.map((notif, i) => (
                                    <motion.li
                                        key={i}
                                        className="text-gray-700 font-poppins p-3 bg-teal-50 rounded-xl notification-item border border-teal-100"
                                        custom={i}
                                        variants={listItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        {notif}
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </motion.div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UserDashboard;