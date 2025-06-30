import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/Icon_homemaid.png';
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-center">
                    <img src={logo} alt="HomeMaid Logo" className="h-16 w-auto rounded-md shadow-md shadow-[#00246B]" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-[#00246B] font-poppins text-center tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-center text-gray-600 font-poppins">
                        Please log in to your account
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-poppins text-gray-700 font-medium">
                            Mobile Number
                        </label>
                        <input
                            id="phone"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter mobile number"
                            autoComplete="username"
                            className="w-full p-3 border border-gray-300 rounded-lg font-poppins mt-1 focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all duration-200 hover:border-[#10B981]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-poppins text-gray-700 font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            autoComplete="current-password"
                            className="w-full p-3 border border-gray-300 rounded-lg font-poppins mt-1 focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all duration-200 hover:border-[#10B981]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#10B981] text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Log In
                    </button>
                    <p className="text-center text-sm text-gray-600 font-poppins">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-[#10B981] hover:text-green-600 font-medium underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;