import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../App';
import { gsap } from 'gsap';

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

        gsap.from(".header-animation", { scale: 0.9, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)", stagger: 0.2 });
        gsap.from(".profile-card", { scale: 0.9, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" });
        gsap.from(".booking-item", { scale: 0.9, opacity: 0, duration: 1, ease: "back.out(1.7)", stagger: 0.3 });
        gsap.from(".earnings-item", { scale: 0.9, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.2 });
        gsap.from(".feedback-item", { scale: 0.9, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.2 });
        gsap.from(".logout-button", { scale: 0.9, opacity: 0, duration: 1.2, ease: "bounce.out" });
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8" role="main" aria-label="Provider Dashboard">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12 header-animation relative">
                    <p className="text-2xl font-extrabold font-poppins text-teal-800 header-animation animate-pulse">
                        Welcome, {provider.name}!
                    </p>
                    <button
                        onClick={handleLogout}
                        className="bg-teal-600 text-white font-poppins text-base font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 logout-button cursor-pointer transform hover:scale-105"
                        aria-label="Logout"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 profile-card border border-teal-100">
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="profile-heading">
                            Profile
                        </h2>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-32 h-32 bg-teal-100 rounded-full overflow-hidden border-2 border-teal-200">
                                <img
                                    src={editedProvider.photo || "https://via.placeholder.com/128"}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <label htmlFor="photo-upload" className="cursor-pointer text-teal-600 hover:text-teal-800 font-poppins transition-colors">
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
                            <button
                                onClick={handleSave}
                                className="w-full bg-teal-600 text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
                                aria-label="Save profile changes"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-teal-100">
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="bookings-heading">
                            Upcoming Bookings
                        </h2>
                        <ul className="space-y-4">
                            {bookings.length === 0 ? (
                                <p className="text-gray-600 font-poppins">No bookings yet.</p>
                            ) : (
                                bookings.map((booking) => (
                                    <li
                                        key={booking.id}
                                        className="text-gray-700 font-poppins p-4 bg-teal-50 rounded-xl booking-item border border-teal-100"
                                    >
                                        {booking.service} for {booking.customer} on {booking.date}
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-teal-100">
                        <h2 className="text-xl font-semibold text-teal-800 font-poppins mb-4" id="feedbacks-heading">
                            Customer Feedbacks
                        </h2>
                        <ul className="space-y-3">
                            {feedbacks.map((feedback) => (
                                <li key={feedback.id} className="text-gray-700 font-poppins p-3 bg-teal-50 rounded-xl feedback-item border border-teal-100">
                                    <p>{feedback.feedback}</p>
                                    <div className="flex items-center space-x-1 mt-2">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span key={i} className="text-yellow-500">
                                                {i < feedback.stars ? '★' : '☆'}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="mt-2">Tip: ₹{feedback.tip}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-teal-100">
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
                            {earnings.recent.map((transaction) => (
                                <li key={transaction.id} className="text-gray-700 font-poppins p-3 bg-teal-50 rounded-xl earnings-item border border-teal-100">
                                    ₹{transaction.amount} for {transaction.service} on {transaction.date}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProviderDashboard;