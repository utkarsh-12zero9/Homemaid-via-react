import { useState, useContext, useEffect } from 'react';
import { LoginContext } from '../../App';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import userProfilePhoto from "../../assets/images/femaleHelper.jpg";

function UserDashboard() {
    const { isLoggedIn, user, bookings, setBookings, userType, setIsLoggedIn, setProvider, setUserType } = useContext(LoginContext);
    const navigate = useNavigate();
    const [editedUser, setEditedUser] = useState({ ...user });
    const [notifications, setNotifications] = useState([
        `New booking confirmed for Cooking on ${new Date().toLocaleDateString()}.`,
        `Payment received for Laundry service.`,
    ]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setEditedUser(JSON.parse(savedUser));
        }

        gsap.from(".header-animation", { scale: 0, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.2 });
        gsap.from(".profile-card", { scale: 0, opacity: 0, duration: 1.2, ease: "back.out(1.7)" });
        gsap.from(".booking-item", { scale: 0, opacity: 0, duration: 1, ease: "back.out(1.7)", stagger: 0.3 });
        gsap.from(".notification-item", { scale: 0, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.2 });
        gsap.from(".logout-button", { scale: 0, opacity: 0, duration: 1.2, ease: "bounce.out" });
    }, [isLoggedIn, navigate]);

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
        setIsLoggedIn(false);
        setProvider(null);
        setUserType(null);
        localStorage.removeItem('user');
        navigate('/');
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const profileData = user;
    const defaultPhoto = userProfilePhoto;

    return (
        <div className="min-h-screen bg-blue-200 py-12 px-4 sm:px-6 lg:px-8" role="main" aria-label="User Dashboard">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12 header-animation relative">
                    <p className="text-xl font-black font-poppins text-gray-700 header-animation">
                        Welcome, {user?.name || "User"}!
                    </p>
                    <button
                        onClick={handleLogout}
                        className="bg-[#1f3e7b] text-white font-poppins text-base font-semibold px-5 py-2 rounded-lg shadow hover:bg-[#00246B] transition-all logout-button cursor-pointer"
                        aria-label="Logout"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 profile-card">
                        <h2 className="text-xl font-semibold text-[#00246B] font-poppins mb-4" id="profile-heading">
                            Profile
                        </h2>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                                <img
                                    src={editedUser.photo || defaultPhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <label htmlFor="photo-upload" className="cursor-pointer text-[#10B981] hover:text-green-600 font-poppins">
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
                                className="w-full p-3 border border-gray-300 rounded-lg font-poppins focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all"
                                placeholder="Name"
                                aria-label="Name"
                            />
                            <input
                                type="email"
                                value={editedUser.email || profileData?.email || ""}
                                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg font-poppins focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all"
                                placeholder="Email"
                                aria-label="Email"
                            />
                            <button
                                onClick={handleSave}
                                className="w-full bg-[#1f3e7b] text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-[#00246B] transition-all shadow-md hover:shadow-lg cursor-pointer"
                                aria-label="Save profile changes"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <h2 className="text-xl font-semibold text-[#00246B] font-poppins mb-4" id="bookings-heading">
                            Booking History
                        </h2>
                        <ul className="space-y-4">
                            {bookings.length === 0 ? (
                                <p className="text-gray-700 font-poppins">No bookings yet.</p>
                            ) : (
                                bookings
                                    .filter((booking) => {
                                        const bookingDate = new Date(booking.date);
                                        bookingDate.setHours(0, 0, 0, 0);
                                        return bookingDate >= today;
                                    })
                                    .map((booking) => (
                                        <li
                                            key={booking.id}
                                            className="text-gray-700 font-poppins p-4 bg-gray-50 rounded-lg flex justify-between items-center booking-item"
                                        >
                                            <span>
                                                {booking.service} by {booking.provider || "Unknown"} on {booking.date}
                                            </span>
                                            <div>
                                                <button
                                                    onClick={() => toggleBookingStatus(booking.id)}
                                                    className={`px-3 py-1 rounded-full text-sm font-medium mr-2 ${booking.status === "completed"
                                                        ? "bg-green-200 text-green-800 hover:bg-green-300"
                                                        : "bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
                                                        } transition-all`}
                                                    aria-label={`Toggle ${booking.service} status to ${booking.status === "completed" ? "active" : "completed"}`}
                                                >
                                                    {booking.status === "completed" ? "Completed" : "Active"}
                                                </button>
                                                <button
                                                    onClick={() => cancelBooking(booking.id)}
                                                    className="px-3 py-1 rounded-full text-sm font-medium bg-red-200 text-red-800 hover:bg-red-300 transition-all"
                                                    aria-label={`Cancel ${booking.service} booking`}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </li>
                                    ))
                            )}
                        </ul>
                        <div className="flex justify-between mt-4">
                            <p className="text-sm text-gray-600 font-poppins">
                                <Link to="/history" className="text-[#10B981] hover:text-green-600 font-medium underline">
                                    View Past Bookings
                                </Link>
                            </p>
                            <button
                                onClick={() => navigate('/booking')}
                                className="bg-[#1f3e7b] text-white font-poppins text-base font-semibold px-5 py-2 rounded-lg shadow hover:bg-[#00246B] transition-all cursor-pointer"
                                aria-label="New Booking"
                            >
                                New Booking
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <h2 className="text-xl font-semibold text-[#00246B] font-poppins mb-4" id="notifications-heading">
                            Notifications 🔔
                        </h2>
                        <ul className="space-y-3">
                            {notifications.map((notif, index) => (
                                <li key={index} className="text-gray-700 font-poppins p-3 bg-gray-50 rounded-lg notification-item">
                                    {notif}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UserDashboard;