import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/Icon_Homemaid.png';
import { LoginContext } from '../../App';

function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn, setUser, setProvider, setUserType } = useContext(LoginContext);

    const handleLogin = (e) => {
        e.preventDefault();
        if (phone === '9876543210' && password === 'user123') {
            setIsLoggedIn(true);
            setUser({ name: "Shreya Jain", phone: "9876543210" });
            setProvider(null);
            setUserType("user");
            localStorage.setItem('user', JSON.stringify({ name: "Shreya Jain", phone: "9876543210" }));
            navigate('/user-dashboard');
        } else if (phone === '0123456789' && password === 'provider123') {
            setIsLoggedIn(true);
            setProvider({ name: "Ravi Kumar", phone: "0123456789" });
            setUser(null);
            setUserType("provider");
            localStorage.setItem('provider', JSON.stringify({ name: "Ravi Kumar", phone: "0123456789" }));
            navigate('/provider-dashboard');
        } else {
            alert('Wrong ID/Password! Use 9876543210/user123 or 0123456789/provider123.');
        }
        setPhone('');
        setPassword('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-teal-100">
                <div className="flex justify-center">
                    <img src={logo} alt="HomeMaid Logo" className="h-20 w-auto rounded-lg shadow-md shadow-teal-200 " />
                </div>
                <div>
                    <h2 className="text-4xl font-extrabold text-teal-800 font-poppins text-center tracking-tight ">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-center text-gray-600 font-poppins">
                        Please log in to your account
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-teal-800 font-poppins">
                            Mobile Number
                        </label>
                        <input
                            id="phone"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter mobile number"
                            autoComplete="username"
                            className="w-full p-3 border border-teal-200 rounded-lg font-poppins focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-teal-800 font-poppins">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            autoComplete="current-password"
                            className="w-full p-3 border border-teal-200 rounded-lg font-poppins focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
                    >
                        Log In
                    </button>
                    <p className="text-center text-sm text-gray-600 font-poppins">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-teal-600 hover:text-teal-800 font-medium underline transition-colors">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;