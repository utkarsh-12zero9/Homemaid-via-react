import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-xs w-full">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg sm:text-xl font-bold text-[#00246B] font-poppins mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 font-poppins mb-2">{service.description}</p>
      <p className="text-sm font-bold text-[#00246B] font-poppins mb-4">{service.price}</p>
      <Link
        to="/booking"
        state={{ service: service.title }}
        className="block text-center bg-[#00246B] text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-90 transition-all hover:scale-105"
      >
        Book Now
      </Link>
    </div>
  );
}

export default ServiceCard;