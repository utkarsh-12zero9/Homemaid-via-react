import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import AppRoutes from './Components/routes/AppRoutes';
import { createContext, useState, useEffect } from 'react';

export const LoginContext = createContext();

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [provider, setProvider] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [userType, setUserType] = useState(null);

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