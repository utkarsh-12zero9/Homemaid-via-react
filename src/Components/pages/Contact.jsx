import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        message: '',
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
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }
        else {
            console.log('Contact data:', formData);

            emailjs
                .send(
                    'service_bk8w5je',
                    'template_3b2of7g',
                    formData,
                    '9SF0_vkuQWvLHMAuK'
                )
                .then(
                    (result) => {
                        console.log('EmailJS success:', result.text);
                        alert('Message sent successfully!');
                        setFormData({ name: '', mobile: '', message: '' });
                        setErrors({});
                        navigate('/');
                    },
                    (error) => {
                        console.log('EmailJS error:', error.text);
                        alert('Failed to send message. Please try again.');
                    }
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
            <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#00246B] font-poppins text-center mb-6">
                    Contact Us
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
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 font-poppins text-sm"
                            rows="4"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1 font-poppins">{errors.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#00246B] text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-90 transition-all hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>
                <p className="text-sm text-gray-600 font-poppins text-center mt-4">
                    Go back to{' '}
                    <Link to="/" className="text-green-500 hover:underline">
                        Home
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Contact;