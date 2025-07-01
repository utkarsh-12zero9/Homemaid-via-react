import { Link } from 'react-router-dom';

function Card({ item, type = 'provider' }) {
  const isProvider = type === 'provider';
  const isService = type === 'service';

  const {
    id,
    name,
    title,
    role,
    description,
    price,
    image,
    rating = 4.5,
    stars = rating
  } = item || {};

  const linkState = isProvider ? { service: role } : { service: title };
  const bookingText = 'Book Now';
  const displayName = name || title || 'Unknown';
  const displayRoleOrDesc = isProvider ? role || 'N/A' : (isService ? description || 'N/A' : 'N/A');
  const displayPriceOrRating = isProvider ? `Rating: ${stars}/5` : (isService ? price || 'N/A' : 'N/A');

  if (!id) {
    return <div className="text-red-600 font-poppins text-center">Error: Invalid item data</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 sm:p-6 max-w-xs w-full transition-all duration-300 border border-teal-100">
      <img
        src={image || 'https://via.placeholder.com/150'}
        alt={displayName}
        className={
          isProvider
            ? "mx-auto h-40 object-cover mb-4 border-2 border-teal-200 rounded-full"
            : isService
            ? "w-full h-40 object-cover rounded-lg mb-4 border-2 border-teal-200"
            : "mx-auto h-40 object-cover mb-4 border-2 border-teal-200 rounded-lg"
        }
        onError={(e) => {
          console.error(`Image load failed for ${displayName}: ${image}`);
          e.target.src = 'https://via.placeholder.com/150';
        }}
      />
      <h3 className="text-lg sm:text-xl font-bold text-teal-800 font-poppins mb-2">{displayName}</h3>
      <p className="text-sm text-gray-600 font-poppins mb-2">{displayRoleOrDesc}</p>
      <p className="text-sm font-bold text-teal-800 font-poppins mb-4">{displayPriceOrRating}</p>
      <Link
        to="/booking"
        state={linkState}
        className="block text-center bg-teal-600 text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        onClick={() => console.log(`Selected ${type}: ${displayName}`)}
      >
        {bookingText}
      </Link>
    </div>
  );
}

export default Card;