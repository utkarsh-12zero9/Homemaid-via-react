import { Link } from 'react-router-dom';

function Card({ provider }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 sm:p-6 max-w-xs w-full transition-all duration-300 border border-teal-100">
      <img
        src={provider.image}
        alt={provider.name}
        className="mx-auto h-40 object-cover rounded-full mb-4 border-2 border-teal-200"
      />
      <h3 className="text-lg sm:text-xl font-bold text-teal-800 font-poppins mb-2">
        {provider.name}
      </h3>
      <p className="text-sm text-gray-600 font-poppins mb-2">{provider.role}</p>
      <p className="text-sm font-bold text-teal-800 font-poppins mb-4">
        Rating: {provider.rating}/5
      </p>
      <Link
        to="/booking"
        state={{ service: provider.role }} // Pass provider's role as service to Booking
        className="block text-center bg-teal-600 text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        onClick={() => console.log(`Selected provider: ${provider.name}`)}
      >
        Book Now
      </Link>
    </div>
  );
}

export default Card;