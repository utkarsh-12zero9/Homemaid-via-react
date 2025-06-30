import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Provider component: Individual provider card
function Provider({ provider }) {
  const { name, role, image, stars = 4.5 } = provider; // Default stars if undefined
  const imageSrc = image || 'https://via.placeholder.com/150'; // Fallback image

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        src={imageSrc}
        alt={name || 'Provider'}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} // Fallback on error
      />
      <h3 className="text-lg font-bold text-[#00246B] font-poppins mb-2">
        {name || 'Unknown Provider'}
      </h3>
      <p className="text-gray-600 font-poppins mb-2">{role || 'N/A'}</p>
      <p className="text-yellow-500 font-poppins flex items-center justify-center mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < Math.round(stars) ? 'text-yellow-500' : 'text-gray-300'}>
            ★
          </span>
        ))}
        <span className="ml-2 text-gray-600">({stars.toFixed(1)})</span>
      </p>
      <Link
        to="/booking"
        state={{ provider: name }}
        className="block text-center bg-[#00246B] text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-90 transition-all hover:scale-105"
      >
        Book Now
      </Link>
    </div>
  );
}

Provider.propTypes = {
  provider: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    stars: PropTypes.number,
  }).isRequired,
};

export default Provider;