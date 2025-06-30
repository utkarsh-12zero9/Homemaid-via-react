import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl max-w-md w-full p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-3 border border-teal-100">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800 font-poppins text-center tracking-tight">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div>
            <label className="block text-sm font-semibold text-teal-800 font-poppins mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300 font-poppins text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-teal-800 font-poppins mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300 font-poppins text-sm"
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.mobile}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-teal-800 font-poppins mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300 font-poppins text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-teal-800 font-poppins mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300 font-poppins text-sm"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 font-poppins">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-600 font-poppins text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-600 hover:text-teal-800 font-medium underline transition-colors">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;