import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import AppRoutes from './Components/routes/AppRoutes';
import { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext();

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [provider, setProvider] = useState(null);
    const [userType, setUserType] = useState(null);
    const [bookings, setBookings] = useState([
    // Existing bookings if any
    { id: 1, service: "Cooking", provider: "Priya Patel", date: "2025-06-15", status: "completed" },
    { id: 2, service: "Laundry", provider: "Ravi Kumar", date: "2025-06-20", status: "completed" },
    // Dummy data added
    { id: 3, service: "Cleaning", provider: "Amit Sharma", date: "2025-06-10", status: "completed" },
    { id: 4, service: "Gardening", provider: "Sneha Gupta", date: "2025-06-05", status: "completed" },
  ]);

    useEffect(() => {
        // Only load from localStorage on initial mount
        const savedUser = localStorage.getItem('user');
        const savedProvider = localStorage.getItem('provider');
        if (savedUser && !isLoggedIn) {
            setUser(JSON.parse(savedUser));
            setIsLoggedIn(true);
            setUserType("user");
        } else if (savedProvider && !isLoggedIn) {
            setProvider(JSON.parse(savedProvider));
            setIsLoggedIn(true);
            setUserType("provider");
        }
    }, []); // Empty dependency array to run only on mount

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, bookings, setBookings, userType, setUserType, provider, setProvider }}>
            <Navbar />
            <AppRoutes />
            <Footer />
        </LoginContext.Provider>
    );
}

export default App;