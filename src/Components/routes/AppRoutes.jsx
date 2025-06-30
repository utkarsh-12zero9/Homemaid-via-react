import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Providers from '../pages/Providers';
import Services from '../pages/Services';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Contact from '../pages/Contact';
import Booking from '../pages/Booking';
import UserDashboard from '../pages/UserDashboard';
import ProviderDashboard from '../pages/ProviderDasboard';
import History from '../pages/History';


const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/providers" element={<Providers />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/provider-dashboard" element={<ProviderDashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/history" element={<History />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;