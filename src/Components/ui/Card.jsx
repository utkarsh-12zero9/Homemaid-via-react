import { Link } from 'react-router-dom';

// Card component: Display provider details with Book Now link passing service
function Card({ provider }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-xs w-full">
      <img
        src={provider.image}
        alt={provider.name}
        className="mx-auto h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg sm:text-xl font-bold text-[#00246B] font-poppins mb-2">
        {provider.name}
      </h3>
      <p className="text-sm text-gray-600 font-poppins mb-2">{provider.role}</p>
      <p className="text-sm font-bold text-[#00246B] font-poppins mb-4">
        Rating: {provider.rating}/5
      </p>
      <Link
        to="/booking"
        state={{ service: provider.role }} // Pass provider's role as service to Booking
        className="block text-center bg-[#00246B] text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-90 transition-all hover:scale-105"
        onClick={() => console.log(`Selected provider: ${provider.name}`)}
      >
        Book Now
      </Link>
    </div>
  );
}

export default Card;