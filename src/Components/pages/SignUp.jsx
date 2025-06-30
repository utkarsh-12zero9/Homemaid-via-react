import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// SignUp component: Mobile number-based registration with validation, no animations
function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('SignUp data:', {
        name: formData.name,
        mobile: formData.mobile,
        password: formData.password,
      });
      alert('Sign Up successful! (Mock submission)');
      setFormData({ name: '', mobile: '', password: '', confirmPassword: '' });
      setErrors({});
      navigate('/login'); // Redirect to login
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00246B] font-poppins text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 font-poppins text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 font-poppins text-sm"
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.mobile}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 font-poppins text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 font-poppins text-sm"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#00246B] text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-90 transition-all hover:scale-105 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-600 font-poppins text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500 cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;