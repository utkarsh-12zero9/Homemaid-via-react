import { Link } from 'react-router-dom';
import { providers } from '../../services/api';
import Card from '../ui/Card';
import FrontMaid from '../../assets/icons/FrontMaid.jpg';

function Homepage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100">
            {/* Hero Section (Unchanged as per request) */}
            <div className="bg-[#00246B] min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Left: Content */}
                    <div className="md:w-1/2 text-center md:text-left lg:mb-8 md:mb-4">
                        <h1 className="text-3xl sm:text-5xl font-bold font-poppins mb-4">
                            Welcome to HomeMaid
                        </h1>
                        <p className="text-lg sm:text-xl font-poppins text-gray-200 mb-6">
                            Your trusted platform for home services – book maids, cooks, and more! Enjoy reliable, vetted providers, a wide range of tasks, and hassle-free booking from the comfort of home.
                        </p>
                        <Link
                            to="/services"
                            className="inline-block bg-[#10B981] text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-90 transition-all hover:scale-105"
                        >
                            Explore Services
                        </Link>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/2">
                        <img
                            src={FrontMaid}
                            alt="HomeMaid Services"
                            className="min-h-[68vh] sm:h-64 md:h-80 lg:h-96 object-contain rounded-lg mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Providers Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-teal-50">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800 font-poppins text-center mb-10">
                    Meet Our Top Providers
                </h2>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {providers.map((provider) => (
                            <Card key={provider.id} provider={provider} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-teal-100">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800 font-poppins text-center mb-10">
                    What Our Customers Say
                </h2>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
                            <p className="text-gray-600 font-poppins italic mb-4">
                                "HomeMaid made my life so easy! The cook they sent was amazing, and booking was a breeze."
                            </p>
                            <p className="font-bold text-teal-800 font-poppins">Ravi Sharma, Homeowner</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
                            <p className="text-gray-600 font-poppins italic mb-4">
                                "Reliable maids and great support. Highly recommend for anyone needing home help!"
                            </p>
                            <p className="font-bold text-teal-800 font-poppins">Priya Patel, Working Mom</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
                            <p className="text-gray-600 font-poppins italic mb-4">
                                "The cleaning service was top-notch, and the process was so simple. Will use again!"
                            </p>
                            <p className="font-bold text-teal-800 font-poppins">Amit Verma, Busy Professional</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
                            <p className="text-gray-600 font-poppins italic mb-4">
                                "Fantastic experience with the laundry service—quick and efficient!"
                            </p>
                            <p className="font-bold text-teal-800 font-poppins">Neha Gupta, Student</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
                            <p className="text-gray-600 font-poppins italic mb-4">
                                "The dusting team was thorough and friendly—highly satisfied!"
                            </p>
                            <p className="font-bold text-teal-800 font-poppins">Sanjay Kumar, Office Worker</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
                            <p className="text-gray-600 font-poppins italic mb-4">
                                "Booking a maid was seamless, and the service exceeded my expectations!"
                            </p>
                            <p className="font-bold text-teal-800 font-poppins">Anjali Desai, Retiree</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
                            <p className="text-gray-600 font-poppins italic mb-4">
                                "Great value for money—my home feels spotless after every visit!"
                            </p>
                            <p className="font-bold text-teal-800 font-poppins">Vikram Singh, Entrepreneur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;