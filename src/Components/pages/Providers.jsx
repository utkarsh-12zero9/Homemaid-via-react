import { Link } from 'react-router-dom';
import { useState } from 'react';
import { providers } from '../../services/api';
import Provider from '../ui/Provider';

// Providers component: List of service providers with search
function Providers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Search */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00246B] font-poppins mb-4">
            Our Providers
          </h1>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search by name or role..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#10B981] focus:border-[#10B981] font-poppins"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <Provider key={provider.id} provider={provider} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/booking"
            className="inline-block bg-[#10B981] text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-90 transition-all hover:scale-105"
          >
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Providers;